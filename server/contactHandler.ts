/**
 * Serverless Contact Handler for Qujott Web Experience
 * Handles /api/contact requests, validates input, applies anti-spam safeguards,
 * formats metadata, and delivers emails to support@qujott.com via Resend.
 */

export interface ContactRequestBody {
  title?: string;
  content?: string;
  senderName?: string;
  senderEmail?: string;
  language?: string;
  sentAt?: string;
  source?: string;
  _hp?: string; // Honeypot field for anti-bot protection
}

export interface HandlerEnv {
  RESEND_API_KEY?: string;
  CONTACT_RECEIVER_EMAIL?: string;
  CONTACT_FROM_EMAIL?: string;
}

// In-memory rate limiting map for basic abuse prevention (IP -> timestamps[])
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX_REQUESTS = 5; // Max 5 submissions per 10 minutes per IP

const checkRateLimit = (clientIp: string): boolean => {
  if (!clientIp || clientIp === 'unknown' || clientIp === '127.0.0.1') return true;
  const now = Date.now();
  const timestamps = (rateLimitMap.get(clientIp) || []).filter(t => now - t < RATE_LIMIT_WINDOW_MS);
  if (timestamps.length >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }
  timestamps.push(now);
  rateLimitMap.set(clientIp, timestamps);
  return true;
};

const escapeHtml = (str: string): string => {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

export const handleContactRequest = async (
  rawBody: string,
  env: HandlerEnv,
  clientIp: string = 'unknown'
): Promise<{ status: number; body: { success: boolean; message?: string; error?: string } }> => {
  // 1. Payload size check (Max 15KB)
  if (rawBody.length > 15 * 1024) {
    return {
      status: 413,
      body: { success: false, error: 'Payload too large (maximum 15KB)' }
    };
  }

  // 2. Parse JSON
  let data: ContactRequestBody;
  try {
    data = JSON.parse(rawBody);
  } catch {
    return {
      status: 400,
      body: { success: false, error: 'Invalid JSON payload' }
    };
  }

  // 3. Honeypot check: If the hidden honeypot field is filled, silently return 200 without sending
  if (data._hp && data._hp.trim() !== '') {
    console.warn('[Anti-Spam] Bot detected via honeypot field. Dropping silently.');
    return {
      status: 200,
      body: { success: true, message: 'OK' }
    };
  }

  // 4. Rate limit check
  if (!checkRateLimit(clientIp)) {
    return {
      status: 429,
      body: { success: false, error: 'Too many requests. Please wait a few minutes before trying again.' }
    };
  }

  // 5. Content validation
  const rawContent = (data.content || '').trim();
  if (!rawContent || rawContent.length < 3) {
    return {
      status: 400,
      body: { success: false, error: 'Message content is empty.' }
    };
  }

  // Clean title & Subject formatting
  // User's title is cleaned (removing leading markdown header hashes)
  let cleanTitle = (data.title || '').replace(/^#{1,6}\s*/, '').trim();
  const lang = (data.language || 'ja').toLowerCase();
  const isJa = lang.startsWith('ja');

  if (!cleanTitle || cleanTitle === '運営者へのメッセージ' || cleanTitle === 'Message to Qujott Team') {
    cleanTitle = isJa ? '運営者へのメッセージ' : 'Note to Qujott Team';
  }

  // Enforce specification: Subject must start with [Web Experience]
  const subject = `[Web Experience] ${cleanTitle}`;

  const senderName = (data.senderName || '').trim();
  const senderEmail = (data.senderEmail || '').trim();
  const isValidEmail = senderEmail.includes('@') && senderEmail.includes('.');
  const sentAtIso = data.sentAt || new Date().toISOString();
  const sentDate = new Date(sentAtIso);
  const formattedSentAt = isNaN(sentDate.getTime()) 
    ? sentAtIso 
    : `${sentDate.toISOString().replace('T', ' ').substring(0, 19)} UTC`;

  const languageLabel = isJa ? 'Japanese (日本語)' : 'English';

  // 6. Format Plain Text Body
  const textBody = `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Qujott Web Experience — Note to Team
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Subject:      ${cleanTitle}
Language:     ${languageLabel}
Sender Name:  ${senderName || '(Not specified)'}
Reply-To:     ${senderEmail || '(Not specified)'}
Source:       ${data.source || 'Qujott Web Experience v0.1.0'}
Sent At:      ${formattedSentAt}
────────────────────────────────────────
Message Content:
────────────────────────────────────────
${rawContent}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;

  // 7. Format HTML Body
  const escapedContent = escapeHtml(rawContent);
  const htmlBody = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1f2937; line-height: 1.6; margin: 0; padding: 24px; background-color: #f8fafc; }
    .card { max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.04); }
    .header { background: #2563eb; color: #ffffff; padding: 18px 24px; }
    .header h1 { margin: 0; font-size: 17px; font-weight: 700; }
    .header p { margin: 4px 0 0 0; font-size: 12px; opacity: 0.9; }
    .meta-table { width: 100%; border-collapse: collapse; background: #f8fafc; border-bottom: 1px solid #e2e8f0; font-size: 13px; }
    .meta-table td { padding: 8px 24px; border-bottom: 1px solid #edf2f7; }
    .meta-label { width: 110px; color: #64748b; font-weight: 600; }
    .meta-value { color: #0f172a; word-break: break-all; }
    .content-area { padding: 24px; }
    .content-label { font-size: 12px; font-weight: 700; color: #475569; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 0.05em; }
    .content-box { white-space: pre-wrap; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; font-size: 13px; color: #1e293b; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; line-height: 1.7; }
    .footer { padding: 14px 24px; font-size: 11px; color: #94a3b8; text-align: center; border-top: 1px solid #f1f5f9; background: #fafafa; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>Qujott Web Experience</h1>
      <p>運営者へメモが届きました (Note from web visitor)</p>
    </div>
    <table class="meta-table">
      <tr><td class="meta-label">Subject:</td><td class="meta-value"><strong>${escapeHtml(cleanTitle)}</strong></td></tr>
      <tr><td class="meta-label">Language:</td><td class="meta-value">${languageLabel}</td></tr>
      <tr><td class="meta-label">Sender Name:</td><td class="meta-value">${senderName ? escapeHtml(senderName) : '<em>(Not specified)</em>'}</td></tr>
      <tr><td class="meta-label">Reply-To:</td><td class="meta-value">${isValidEmail ? `<a href="mailto:${escapeHtml(senderEmail)}">${escapeHtml(senderEmail)}</a>` : '<em>(Not specified)</em>'}</td></tr>
      <tr><td class="meta-label">Sent At:</td><td class="meta-value">${formattedSentAt}</td></tr>
    </table>
    <div class="content-area">
      <div class="content-label">Message Content</div>
      <div class="content-box">${escapedContent}</div>
    </div>
    <div class="footer">
      Sent via Qujott Web Experience (v0.1.0) &bull; support@qujott.com
    </div>
  </div>
</body>
</html>`;

  // 8. Deliver Email via Resend API
  const resendApiKey = env.RESEND_API_KEY;
  const receiverEmail = env.CONTACT_RECEIVER_EMAIL || 'support@qujott.com';
  // Use verified sender or onboarding default
  const fromEmail = env.CONTACT_FROM_EMAIL || 'Qujott Web Experience <onboarding@resend.dev>';

  if (!resendApiKey) {
    console.warn('[Contact API] RESEND_API_KEY is not configured in environment variables.');
    return {
      status: 500,
      body: { 
        success: false, 
        error: 'Email service is not configured (RESEND_API_KEY missing).' 
      }
    };
  }

  try {
    const resendPayload: any = {
      from: fromEmail,
      to: [receiverEmail],
      subject: subject,
      text: textBody,
      html: htmlBody,
    };

    if (isValidEmail) {
      resendPayload.reply_to = senderEmail;
    }

    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(resendPayload),
    });

    if (resendRes.ok) {
      const resendData = await resendRes.json().catch(() => ({}));
      console.log('[Contact API] Email successfully delivered via Resend. ID:', (resendData as any).id);
      return {
        status: 200,
        body: { success: true, message: 'Note sent successfully' }
      };
    } else {
      const errJson = await resendRes.json().catch(() => ({}));
      console.error('[Contact API] Resend API error response:', resendRes.status, errJson);
      return {
        status: 502,
        body: { 
          success: false, 
          error: (errJson as any)?.message || `Mail delivery service error (${resendRes.status})` 
        }
      };
    }
  } catch (err: any) {
    console.error('[Contact API] Unexpected error contacting Resend API:', err);
    return {
      status: 500,
      body: { success: false, error: err?.message || 'Internal mail delivery error' }
    };
  }
};

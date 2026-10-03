import { handleContactRequest, type HandlerEnv } from '../../server/contactHandler';

export interface Env extends HandlerEnv {}

// Handle CORS Preflight
export const onRequestOptions = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
};

// Handle POST /api/contact
export const onRequestPost = async (context: { request: Request; env: Env }) => {
  const { request, env } = context;
  const clientIp = 
    request.headers.get('cf-connecting-ip') || 
    request.headers.get('x-forwarded-for') || 
    'unknown';
  
  const rawBody = await request.text();
  const result = await handleContactRequest(rawBody, env, clientIp);

  return new Response(JSON.stringify(result.body), {
    status: result.status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
};

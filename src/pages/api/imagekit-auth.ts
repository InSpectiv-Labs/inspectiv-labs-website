import type { APIRoute } from 'astro';
import crypto from 'crypto';

export const prerender = false;

export const GET: APIRoute = async () => {
  const privateKey = import.meta.env.IMAGEKIT_PRIVATE_KEY || '';
  
  const token = crypto.randomUUID();
  const expire = Math.floor(Date.now() / 1000) + 60 * 30; // 30 mins
  const signature = crypto.createHmac('sha1', privateKey).update(token + expire).digest('hex');

  return new Response(
    JSON.stringify({
      token,
      expire,
      signature
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
};

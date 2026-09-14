import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const { url } = await request.json();
    
    if (!url) {
      return new Response(JSON.stringify({ error: 'URL is required' }), { status: 400 });
    }

    const privateKey = import.meta.env.IMAGEKIT_PRIVATE_KEY;
    
    if (!privateKey) {
      return new Response(JSON.stringify({ error: 'IMAGEKIT_PRIVATE_KEY is not configured' }), { status: 500 });
    }

    const authHeader = 'Basic ' + Buffer.from(privateKey + ':').toString('base64');

    // 1. Search for the file by name and folder path
    const imagekitUrl = import.meta.env.PUBLIC_IMAGEKIT_URL_ENDPOINT || '';
    if (!url.startsWith(imagekitUrl)) {
      return new Response(JSON.stringify({ error: 'URL does not belong to this ImageKit endpoint' }), { status: 400 });
    }

    const relativePath = url.replace(imagekitUrl, ''); // e.g. "/website/insights/dashboard_A7x9b.png"
    const filename = relativePath.split('/').pop();
    const folderPath = relativePath.substring(0, relativePath.lastIndexOf('/'));

    if (!filename) {
      return new Response(JSON.stringify({ error: 'Invalid URL format' }), { status: 400 });
    }
    
    const searchQuery = `name="${filename}"`;
    const searchUrl = `https://api.imagekit.io/v1/files?path=${encodeURIComponent(folderPath)}&searchQuery=${encodeURIComponent(searchQuery)}`;
    
    const searchResponse = await fetch(searchUrl, {
      method: 'GET',
      headers: {
        'Authorization': authHeader
      }
    });

    if (!searchResponse.ok) {
      const errorText = await searchResponse.text();
      return new Response(JSON.stringify({ error: 'Failed to search ImageKit', details: errorText }), { status: searchResponse.status });
    }

    const files = await searchResponse.json();
    
    if (!files || files.length === 0) {
      // File not found in ImageKit, maybe already deleted or wrong URL.
      // We can just return success since it's already gone.
      return new Response(JSON.stringify({ success: true, message: 'File not found in ImageKit, skipped deletion.' }), { status: 200 });
    }

    const fileId = files[0].fileId;

    // 2. Delete the file by fileId
    const deleteUrl = `https://api.imagekit.io/v1/files/${fileId}`;
    const deleteResponse = await fetch(deleteUrl, {
      method: 'DELETE',
      headers: {
        'Authorization': authHeader
      }
    });

    if (!deleteResponse.ok) {
      const errorText = await deleteResponse.text();
      return new Response(JSON.stringify({ error: 'Failed to delete file from ImageKit', details: errorText }), { status: deleteResponse.status });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};

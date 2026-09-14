// Native fetch upload function that bypasses SDK issues
export const uploadToImageKit = async (file: File, folder: string = '/website/uploads') => {
  const urlEndpoint = import.meta.env.PUBLIC_IMAGEKIT_URL_ENDPOINT || '';
  const publicKey = import.meta.env.PUBLIC_IMAGEKIT_PUBLIC_KEY || '';
  const authEndpoint = import.meta.env.PUBLIC_IMAGEKIT_AUTH_ENDPOINT || '';

  if (!urlEndpoint.startsWith('http')) {
    throw new Error('ImageKit URL endpoint is not configured in .env');
  }

  // 1. Fetch authentication parameters from our API route
  const authResponse = await fetch(authEndpoint);
  if (!authResponse.ok) {
    throw new Error('Failed to get authentication parameters');
  }
  const { signature, expire, token } = await authResponse.json();

  // 2. Prepare FormData
  const formData = new FormData();
  formData.append('file', file);
  formData.append('publicKey', publicKey);
  formData.append('signature', signature);
  formData.append('expire', expire.toString());
  formData.append('token', token);
  const fileExtension = file.name.split('.').pop();
  const baseName = file.name.substring(0, file.name.lastIndexOf('.'));
  const randomSuffix = crypto.randomUUID().split('-')[0];
  const uniqueFileName = `${baseName}_${randomSuffix}.${fileExtension}`;

  formData.append('fileName', uniqueFileName);
  formData.append('useUniqueFileName', 'true');
  if (folder) {
    formData.append('folder', folder);
  }

  // 3. Upload to ImageKit API
  const uploadResponse = await fetch('https://upload.imagekit.io/api/v1/files/upload', {
    method: 'POST',
    body: formData,
  });

  if (!uploadResponse.ok) {
    const errorBody = await uploadResponse.text();
    throw new Error(`Upload failed: ${errorBody}`);
  }

  return await uploadResponse.json();
};

export const deleteFromImageKit = async (url: string) => {
  if (!url || !url.includes('ik.imagekit.io')) return; // Only delete actual imagekit urls

  try {
    const deleteResponse = await fetch('/api/imagekit-delete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ url })
    });

    if (!deleteResponse.ok) {
      console.error('Failed to delete image from ImageKit', await deleteResponse.text());
    }
  } catch (err) {
    console.error('Error in deleteFromImageKit', err);
  }
};

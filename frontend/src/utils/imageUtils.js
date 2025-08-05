const BACKEND_URL = 'https://book-store-61ip.onrender.com';

export const getImageUrl = (imagePath) => {
  if (!imagePath) return '/default-book.png'; 

  
  if (imagePath.startsWith('http')) {
    return imagePath;
  }

  
  if (imagePath.includes('uploads')) {
    
    const cleanPath = imagePath.replace(/^\/+/, '');
    return `${BACKEND_URL}/${cleanPath}`;
  }

  
  if (imagePath.startsWith('/')) {
    return imagePath;
  }

  return `/${imagePath}`;
};

export default getImageUrl;

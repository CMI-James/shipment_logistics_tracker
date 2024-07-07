// src/hooks/useImageLoader.js
import { useState, useEffect } from 'react';

const useImageLoader = (imageUrls) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const images = imageUrls.map((url) => {
      const img = new Image();
      img.src = url;
      return img;
    });

    const checkImagesLoaded = () => {
      if (images.every((img) => img.complete)) {
        setLoaded(true);
      }
    };

    images.forEach((img) => {
      img.onload = checkImagesLoaded;
      img.onerror = checkImagesLoaded; // Also handle error cases
    });

    // Cleanup
    return () => {
      images.forEach((img) => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, [imageUrls]);

  return loaded;
};

export default useImageLoader;

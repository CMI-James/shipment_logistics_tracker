// src/hooks/useImageLoader.js
import { useState, useEffect } from 'react';

const useImageLoader = (imageUrls) => {
  const [loaded, setLoaded] = useState(sessionStorage.getItem('imagesLoaded') === 'true');

  useEffect(() => {
    if (loaded) {
      console.log('Images already loaded in sessionStorage');
      return;
    }

    console.log('Loading images for the first time');

    const images = imageUrls.map((url) => {
      const img = new Image();
      img.src = url;
      return img;
    });

    const checkImagesLoaded = () => {
      if (images.every((img) => img.complete)) {
        console.log('All images loaded');
        setLoaded(true);
        sessionStorage.setItem('imagesLoaded', 'true');
      }
    };

    images.forEach((img) => {
      img.onload = checkImagesLoaded;
      img.onerror = checkImagesLoaded;
    });

    return () => {
      images.forEach((img) => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, [imageUrls, loaded]);

  return loaded;
};

export default useImageLoader;

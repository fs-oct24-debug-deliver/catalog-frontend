import { useState } from 'react';
import styles from './PhotosBlock.module.scss';

export const PhotosBlock = ({ images }: { images: string[] }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  const handleThumbnailClick = (image: string) => {
    setMainImage(image);
  };

  return (
    <div className={styles.photosBlock}>
      <div className={styles.mainPhoto}>
        <img
          src={mainImage}
          alt="Main"
        />
      </div>

      <div className={styles.thumbnailColumn}>
        {images.slice(0, 4).map((image, index) => (
          <img
            className={`${styles.thumbnail} ${
              mainImage === image ? styles.selected : ''
            }`}
            key={image}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => handleThumbnailClick(image)}
          />
        ))}
      </div>
    </div>
  );
};

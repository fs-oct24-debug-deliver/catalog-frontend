import { useState } from 'react';
import styles from './Gallery.module.scss';

export const Gallery = ({ images }: { images: string[] }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  const handleThumbnailClick = (image: string) => {
    setMainImage(image);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.photosBlock}>
          <div className={styles.mainPhoto}>
            <img
              src={`/${mainImage}`}
              alt="Main"
            />
          </div>

          <div className={styles.thumbnailColumn}>
            {images.slice(0, 4).map((image, index) => (
              <div
                className={`${styles.thumbnailWrapper} ${mainImage === image ? styles.selected : ''}`}
                key={image}
                onClick={() => handleThumbnailClick(image)}
              >
                <img
                  className={styles.thumbnail}
                  key={image}
                  src={`/${image}`}
                  alt={`Thumbnail ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.characteristics}></div>
      </div>
    </>
  );
};

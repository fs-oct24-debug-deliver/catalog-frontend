import { useEffect, useState } from 'react';
import styles from './Gallery.module.scss';

export const Gallery = ({
  images,
  mainImage,
}: {
  images: string[];
  mainImage: string;
}) => {
  const [currentImage, setCurrentImage] = useState(mainImage);

  useEffect(() => {
    setCurrentImage(mainImage);
  }, [mainImage]);

  const handleThumbnailClick = (image: string) => {
    setCurrentImage(image);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.photosBlock}>
          <div className={styles.mainPhoto}>
            <img
              src={`/${currentImage}`}
              alt="Main"
            />
          </div>

          <div className={styles.thumbnailColumn}>
            {images.slice(0, 4).map((image, index) => (
              <div
                className={`${styles.thumbnailWrapper} ${
                  currentImage === image ? styles.selected : ''
                }`}
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
      </div>
    </>
  );
};

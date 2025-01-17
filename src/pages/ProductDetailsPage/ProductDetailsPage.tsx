import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  getProductById,
  getProductsByCategory,
} from '../../servises/productFunctions';
import { ButtonBack } from '../../components/ButtonBack';
import { AboutSection } from './components/AboutSection';
import styles from './ProductDetailsPage.module.scss';
import { Gallery } from './components/Gallery';
import { Product } from '../../types/Product';
import { Loader } from '../../components/Loader';
import { Card } from '../../types/Card';
import { SwiperComponent } from '../../components/Swiper/Swiper';
import { Characteristics } from './components/Characteristics';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';

export const ProductDetailsPage = () => {
  const { itemId } = useParams();
  const location = useLocation();

  const getCategoryFromPath = (): string => {
    if (location.pathname.includes('phones')) return 'phones';
    if (location.pathname.includes('tablets')) return 'tablets';
    if (location.pathname.includes('accessories')) return 'accessories';
    return 'phones';
  };

  const category = getCategoryFromPath();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [recomendedProducts, setRecomendedProducts] = useState<Card[]>();
  const [isLoadingRecomendedProducts, setIsLoadingRecomendedProducts] =
    useState(true);
  const [card, setCard] = useState<Card>();
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedCapacity, setSelectedCapacity] = useState('');
  const [mainImage, setMainImage] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [itemId]);

  useEffect(() => {
    if (!itemId) return;

    setIsLoading(true);

    Promise.all([
      getProductsByCategory(category),
      getProductById(itemId, category),
    ])
      .then(([loadedProducts, loadedProduct]) => {
        setRecomendedProducts(loadedProducts.slice(0, 8));
        setProduct(loadedProduct);
        setCard(loadedProducts.find((c) => c.itemId === itemId));

        if (loadedProduct) {
          setSelectedColor(loadedProduct.color);
          setSelectedCapacity(loadedProduct.capacity.toLowerCase());
          setMainImage(loadedProduct.images[0]);
        }
      })
      .catch(() =>
        setErrorMessage('Failed to load product details. Please try again.'),
      )
      .finally(() => {
        setIsLoadingRecomendedProducts(false);
        setIsLoading(false);
      });
  }, [itemId, category]);

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    let newUrl = '';

    if (category === 'accessories' && color === 'spacegray') {
      newUrl = `/${category}/${product?.namespaceId}-${selectedCapacity}-space-gray`;
    } else {
      newUrl = `/${category}/${product?.namespaceId}-${selectedCapacity}-${color}`;
    }

    const colorImage = product?.images.find((img) =>
      img.toLocaleLowerCase().includes(color.toLocaleLowerCase()),
    );
    if (colorImage) setMainImage(colorImage);
    navigate(newUrl);
  };

  const handleCapacityChange = (capacity: string) => {
    setSelectedCapacity(capacity);
    let newUrl = '';

    if (category === 'accessories' && selectedColor === 'space gray') {
      newUrl = `/${category}/${product?.namespaceId}-${capacity}-space-gray`;
    } else {
      newUrl = `/${category}/${product?.namespaceId}-${capacity}-${selectedColor}`;
    }

    navigate(newUrl);
  };

  if (!product) {
    return (
      <>
        <ButtonBack />
        <h1>Product not found! {product}</h1>
      </>
    );
  }

  return (
    <>
      {errorMessage ?
        <h1>{errorMessage}</h1>
      : <div>
          <div className={styles.bread_crumps}>
            <Breadcrumbs />
          </div>
          <ButtonBack />
          {isLoading && <Loader />}

          <h1 className={styles.title}>{product.name}</h1>

          <div className={styles.brief_info}>
            <Gallery
              images={product.images}
              mainImage={mainImage}
            />
            {card && (
              <Characteristics
                product={product}
                selectedColor={selectedColor}
                selectedCapacity={selectedCapacity}
                handleCapacityChange={handleCapacityChange}
                handleColorChange={handleColorChange}
                card={card}
              />
            )}
          </div>

          <div className={styles.about_section}>
            <AboutSection
              description={product.description}
              specs={{
                screen: product.screen,
                resolution: product.resolution,
                processor: product.processor,
                ram: product.ram,
                camera: product.camera,
                zoom: product.zoom,
                cell: product.cell,
              }}
            />
          </div>

          {!isLoadingRecomendedProducts && recomendedProducts?.length && (
            <div className={styles.swiper_component}>
              <SwiperComponent
                cards={recomendedProducts}
                title="You may also like"
              />
            </div>
          )}
        </div>
      }
    </>
  );
};

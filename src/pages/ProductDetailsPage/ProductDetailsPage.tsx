// import detailStyle from './ProductDetailsPage.module.scss';
import { ButtonBack } from '../../components/ButtonBack';
// import { Gallery } from '../../components/Gallery';
// import { Characteristics } from '../../components/Characteristics';
import { AboutSection } from './components/AboutSection/AboutSection';
// import { TechSpecs } from './components/AboutSection/AboutSection';

export const ProductDetailsPage = () => {
  return (
    <div>
      <h1>ProductDetailsPage</h1>
      <ButtonBack />
      {/* <Gallery />
      <Characteristics /> */}
      <AboutSection />
      {/* <TechSpecs /> */}
    </div>
  );
};

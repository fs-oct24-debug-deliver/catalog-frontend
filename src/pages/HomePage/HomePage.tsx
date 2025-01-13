import { HomePageSwiper } from './components/HomePageSwiper';
import { Category } from './components/Category';

export const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Nice Gadgets store!</h1>
      <section>
        <HomePageSwiper />
      </section>
      {/* <ProductsSlider />  Brand new models*/}
      <Category />
      {/* <ProductsSlider />  Hot prices*/}
    </div>
  );
};

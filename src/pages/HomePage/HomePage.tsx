import { HomePageSwiper } from './components/HomePageSwiper';

export const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Nice Gadgets store!</h1>
      <section>
        <HomePageSwiper />
      </section>
      {/* <ProductsSlider />  Brand new models*/}
      {/* <ShopByCategory />  Shop by category*/}
      {/* <ProductsSlider />  Hot prices*/}
    </div>
  );
};

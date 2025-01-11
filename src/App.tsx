import { Outlet } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/FooterComponent/Footer';
import styles from './App.module.scss';
import { HomePageSwiper } from './pages/HomePage/components/HomePageSwiper';

const App = () => (
  <>
    <Header />
    <div className={styles.container}>
      <Outlet />
    </div>
    <HomePageSwiper />
    <Footer />
  </>
);

export default App;

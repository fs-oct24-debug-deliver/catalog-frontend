import { Outlet } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/FooterComponent/Footer';
import styles from './App.module.scss';
import './i18n/i18n';

const App = () => (
  <>
    <Header />
    <div className={styles.container}>
      <Outlet />
    </div>
    <Footer />
  </>
);

export default App;

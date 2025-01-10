import { Outlet } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/FooterComponent/Footer';

const App = () => (
  <>
    <Header />
    <div className="container">
      <Outlet />
    </div>
    <Footer />
  </>
);

export default App;

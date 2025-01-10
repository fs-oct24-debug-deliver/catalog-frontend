import { Outlet } from 'react-router-dom';

import './App.module.scss';
import { CartPage } from './pages/CartPage';

const App = () => {
  return (
    <div>
      {/* <Header /> */}
      <Outlet />
      {/* <Footer /> */}
      <CartPage />
    </div>
  );
};

export default App;

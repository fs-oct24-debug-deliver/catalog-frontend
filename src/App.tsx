import { Outlet } from 'react-router-dom';

import './App.module.scss';

const App = () => {
  return (
    <div>
      {/* <Header /> */}
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default App;

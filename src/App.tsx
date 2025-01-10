import { Outlet } from 'react-router-dom';
import { Header } from './components/Header.tsx/Header';

const App = () => (
  <>
    <Header />
    <Outlet />
  </>
);

export default App;

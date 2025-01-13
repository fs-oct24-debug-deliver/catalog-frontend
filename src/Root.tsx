import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import { HomePage } from './pages/HomePage';
import { PhonesPage } from './pages/PhonesPage';
import { ProductDetailsPage } from './pages/ProductDetailsPage';
import { TabletsPage } from './pages/TabletsPage';
import { AccessoriesPage } from './pages/AccessoriesPage';
import { FavoritesPage } from './pages/FavoritesPage';
import { CartPage } from './pages/CartPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const Root = () => (
  <Router>
    <Routes>
      <Route
        path="/"
        element={<App />}
      >
        <Route
          index
          element={<HomePage />}
        />
        <Route
          path="phones"
          element={<PhonesPage />}
        ></Route>
        <Route
          path="phones/:itemId"
          element={<ProductDetailsPage />}
        />
        <Route
          path="tablets"
          element={<TabletsPage />}
        >
          <Route
            path=":itemId"
            element={<ProductDetailsPage />}
          />
        </Route>
        <Route
          path="accessories"
          element={<AccessoriesPage />}
        >
          <Route
            path=":itemId"
            element={<ProductDetailsPage />}
          />
        </Route>
        <Route
          path="favorites"
          element={<FavoritesPage />}
        />
        <Route
          path="cart"
          element={<CartPage />}
        />
      </Route>

      <Route
        path="*"
        element={<NotFoundPage />}
      />
    </Routes>
  </Router>
);

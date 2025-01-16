import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from 'react-router-dom';
import App from './App';
import { HomePage } from './pages/HomePage';
import { PhonesPage } from './pages/PhonesPage';
import { ProductDetailsPage } from './pages/ProductDetailsPage';
import { TabletsPage } from './pages/TabletsPage';
import { AccessoriesPage } from './pages/AccessoriesPage';
import { FavoritesPage } from './pages/FavoritesPage';
import { CartPage } from './pages/CartPage';
import { NotFoundPage } from './pages/NotFoundPage';

const DynamicRouteWrapper = ({
  DefaultComponent,
  DetailsComponent,
}: {
  DefaultComponent: React.ComponentType;
  DetailsComponent: React.ComponentType<{ itemId: string }>;
}) => {
  const { itemId } = useParams();
  return itemId ? <DetailsComponent itemId={itemId} /> : <DefaultComponent />;
};

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
          path="phones/:itemId?"
          element={
            <DynamicRouteWrapper
              DefaultComponent={PhonesPage}
              DetailsComponent={ProductDetailsPage}
            />
          }
        />

        <Route
          path="tablets/:itemId?"
          element={
            <DynamicRouteWrapper
              DefaultComponent={TabletsPage}
              DetailsComponent={ProductDetailsPage}
            />
          }
        />

        <Route
          path="accessories/:itemId?"
          element={
            <DynamicRouteWrapper
              DefaultComponent={AccessoriesPage}
              DetailsComponent={ProductDetailsPage}
            />
          }
        />

        <Route
          path="favorites"
          element={<FavoritesPage />}
        />
        <Route
          path="cart"
          element={<CartPage />}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Route>
    </Routes>
  </Router>
);

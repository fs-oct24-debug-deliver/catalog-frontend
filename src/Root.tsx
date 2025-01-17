import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from 'react-router-dom';
import App from './App';
import { HomePage } from './pages/HomePage';
import { ProductDetailsPage } from './pages/ProductDetailsPage';
import { FavoritesPage } from './pages/FavoritesPage';
import { CartPage } from './pages/CartPage';
import { NotFoundPage } from './pages/NotFoundPage';
// import { ContactsPage } from './pages/ContactsPage/ContactsPage';
import { RightsPage } from './pages/RightsPage/RightsPage';
import { CategoryPage } from './pages/CategoryPage/CategoryPage';

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
              DefaultComponent={CategoryPage}
              DetailsComponent={ProductDetailsPage}
            />
          }
        />

        <Route
          path="tablets/:itemId?"
          element={
            <DynamicRouteWrapper
              DefaultComponent={CategoryPage}
              DetailsComponent={ProductDetailsPage}
            />
          }
        />

        <Route
          path="accessories/:itemId?"
          element={
            <DynamicRouteWrapper
              DefaultComponent={CategoryPage}
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
        {/* <Route
          path="contacts"
          element={<ContactsPage />}
        /> */}
        <Route
          path="rights"
          element={<RightsPage />}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Route>
    </Routes>
  </Router>
);

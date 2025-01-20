import { createRoot } from 'react-dom/client';
import { Root } from './Root.tsx';
import './styles/index.scss';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './app/store';
import { Toaster } from 'react-hot-toast';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { colors } from './styles/utils/variables.ts';

createRoot(document.getElementById('root') as HTMLElement).render(
  <SkeletonTheme
    baseColor={colors.secondary}
    highlightColor={colors.text}
  >
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        <Toaster
          position="top-center"
          reverseOrder={true}
        />

        <Root />
      </PersistGate>
    </Provider>
  </SkeletonTheme>,
);

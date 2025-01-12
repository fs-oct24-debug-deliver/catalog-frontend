import { createRoot } from 'react-dom/client';
import { Root } from './Root.tsx';
import './styles/index.scss';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './app/store';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root') as HTMLElement).render(
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
  </Provider>,
);

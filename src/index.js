import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import { ModalContextProvider } from 'context/ModalContext';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ModalContextProvider>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </ModalContextProvider>
);

/* module08-lesson01 - 00:47:00 */

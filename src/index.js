import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
// import AppWithRequest from 'components/AppWithRequest';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import { ModalContextProvider } from 'context/ModalContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ModalContextProvider>
    {/* <AppWithRequest /> */}
    <App />
  </ModalContextProvider>
);

/* module04-lesson02 - 01:16:00 */

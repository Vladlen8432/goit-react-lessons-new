import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import { ModalContextProvider } from 'context/ModalContext';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ModalContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ModalContextProvider>
);

/* module06-lesson01 - start */

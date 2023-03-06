import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ModalContextProvider from './context/modalContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <ModalContextProvider>
        <App />
    </ModalContextProvider>
);

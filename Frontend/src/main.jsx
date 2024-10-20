import React from 'react';
import App from './App.jsx';
import './index.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; 
import ProductContextProvider from './Context/ProductContext.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter> 
    <ProductContextProvider>
      <App />
    </ProductContextProvider>
  </BrowserRouter>
);

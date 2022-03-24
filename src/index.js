import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './components/product/ProductSlice';
import CartSlice from './components/cart/CartSlice';

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: CartSlice,
  }
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

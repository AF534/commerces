import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { configureStore, createReducer} from "@reduxjs/toolkit";

import productsReducer,{productsFetch} from "./feature/productSlice";
import { productsApi } from "./feature/productApi";
import cartReducer, { getTotals } from './feature/cartSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart : cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),

});

store.dispatch(productsFetch());
store.dispatch(getTotals());
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

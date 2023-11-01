import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import store from './redux/store';
import axios from 'axios'

// axios.defaults.baseURL='http://localhost:3001';
axios.defaults.baseURL='https://pi-dogs-backend-production.up.railway.app'

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

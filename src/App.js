import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import './config/ReactotronConfig';

import history from './services/history';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <GlobalStyle />
        <Routes />
        <ToastContainer autoClose={3000} />
      </Router>
    </Provider>
  );
}

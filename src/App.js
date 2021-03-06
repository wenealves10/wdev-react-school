import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import history from './services/history';
import Header from './components/Header';
import Global from './styles/Global';
import Routes from './routes';
import store, { persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ToastContainer autoClose={2000} className="toast-container" />
        <Router history={history}>
          <Header />
          <Routes />
        </Router>
        <Global />
      </PersistGate>
    </Provider>
  );
}
export default App;

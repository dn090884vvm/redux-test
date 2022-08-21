import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import Timer from './Timer';
import store from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Timer />
    </Provider>
  </React.StrictMode>
);

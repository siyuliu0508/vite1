import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line no-unused-vars
import * as bootstrap from 'bootstrap';
import App from './App';
import i18n from './i18n'; // 导入i18n配置
import './index.scss';

ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

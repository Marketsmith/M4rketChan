import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './app'
import store from './store';

const root = createRoot(document.getElementById('root'));

root.render(

    <BrowserRouter>
      <App />
    </BrowserRouter>

);


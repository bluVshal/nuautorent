import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './api/store';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PrimeReactProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PrimeReactProvider>
    </Provider>
  </StrictMode>,
)

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { Providers } from './providers';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './api/store';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Providers>
        <PrimeReactProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PrimeReactProvider>
      </Providers>
    </Provider>
  </StrictMode>,
)

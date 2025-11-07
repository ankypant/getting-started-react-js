import './index.css';

import { AppRoutes } from './Router.tsx';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { store } from './state/Store.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* 
    Provider is the component that provides the store to the entire application - 
    it is a wrapper component that wraps the entire application and provides
    the store to the entire application.
    This allows us to use the store in any component within the application.
    */}
    <Provider store={store}>
      <RouterProvider router={AppRoutes} />
    </Provider>
  </StrictMode>
);

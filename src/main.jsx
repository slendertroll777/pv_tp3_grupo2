import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes';
import 'bootstrap/dist/css/bootstrap.min.css'
import { UsuarioProvider } from './context/UsuarioContext';

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <UsuarioProvider>

      <RouterProvider router={routes} />

    </UsuarioProvider>

  </StrictMode>,
)
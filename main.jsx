import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './Login page/Login.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

const b=createBrowserRouter([
{
path:"/",
element:<App/>
},
{
path:"Login",
element:<Login/>
}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={b}  />
  </StrictMode>,
)
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Optional, for components that require JS

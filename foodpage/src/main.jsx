import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Login from './Login.jsx'
import Products from './Products.jsx'
import ViewProduct from './ViewProduct.jsx'
import Testing from './Testing.jsx'
import { SkeletonTheme } from 'react-loading-skeleton'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/products',
    element: <Products />
  },
  {
    path: '/productpage/:id',
    element: <ViewProduct />
  },
  {
    path: '/testing',
    element: <Testing />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SkeletonTheme baseColor='#faefd7' highlightColor='#fadbdc'>
      <RouterProvider router={router}/>
    </SkeletonTheme>
  </StrictMode>,
)

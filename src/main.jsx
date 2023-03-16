import React, {Suspense} from 'react'
import ReactDOM  from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter, matchPath, RouterProvider} from 'react-router-dom'
import ThemeProvider from './contexts/ThemeProvider'


const Admin = React.lazy(()=> import('./pages/Admin'))
const Notfound = React.lazy(()=> import('./pages/Notfound'))

const router = createBrowserRouter([
  {path: "/", element: <App />, errorElement: <Notfound/>},
  {path: "/admin", element: <Admin/>},

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ThemeProvider>
        <Suspense>
            <RouterProvider router={router} />
        </Suspense>
     </ThemeProvider>
  </React.StrictMode>
)

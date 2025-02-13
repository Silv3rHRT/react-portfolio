import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import About from './pages/About.jsx'
import Error from './pages/Error.jsx'
import Portfolio from './pages/Portfolio.tsx'
import Contact from './pages/Contact.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: '/portfolio',
        element: <Portfolio />,
      },
      {
        path: '/contact',
        element: <Contact />,
      }
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <RouterProvider router={router} />
);

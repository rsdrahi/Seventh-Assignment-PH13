import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import RootLayout from './layout/RootLayout'
import TimeLine from './pages/TimeLine/TimeLine'
import Stats from './pages/Stats/Stats'

const router = createBrowserRouter(
  [
    {
      path: '/',
      Component: RootLayout,
      children: 
        [
          {
            // path: '/',
            index: true,
            element: <h2>Homepage</h2>
          },
          {
            path: '/timeline',
            element: <TimeLine></TimeLine>
          },
          {
            path: 'stats',
            element: <Stats></Stats>
          }
        ],
      errorElement: <h2>This Page is Not Found</h2>
    }
  ]
)

createRoot (document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)

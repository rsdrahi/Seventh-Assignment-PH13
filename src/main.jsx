import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import RootLayout from './layout/RootLayout'
import TimeLine from './pages/TimeLine/TimeLine'
import Stats from './pages/Stats/Stats'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import Homepage from './pages/Homepage/Homepage'

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
            element: <Homepage></Homepage>
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
      errorElement: <NotFoundPage></NotFoundPage>
    }
  ]
)

createRoot (document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)

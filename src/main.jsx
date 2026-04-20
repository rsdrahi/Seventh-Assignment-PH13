import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter} from 'react-router'
import RootLayout from './layout/RootLayout'
import TimeLine from './pages/TimeLine/TimeLine'
import Stats from './pages/Stats/Stats'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import Homepage from './pages/Homepage/Homepage'
import CardDetails from './pages/CardDetails/CardDetails'
import ButtonProvider from './context/ButtonProvider'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout></RootLayout>,
      children: 
        [
          {
            // path: '/',
            index: true,
            element: <Homepage></Homepage>
          },
          {
            path: "/cardDetails/:id",
            element: <CardDetails></CardDetails>
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
    <ButtonProvider>
    <RouterProvider router={router} />
    </ButtonProvider>
  </StrictMode>
)

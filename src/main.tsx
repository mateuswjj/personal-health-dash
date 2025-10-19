import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { UserInfo } from './components/UserInfo.tsx'
import { Dashboard } from './components/Dashboard.tsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/dashboard', element: <Dashboard /> },
      { path: '/info', element: <UserInfo /> },
    ],
  },
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)

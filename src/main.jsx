import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './routes/routes.jsx'
import BlogsProvider from './providers/BlogsProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BlogsProvider>
      <RouterProvider router={router} />
    </BlogsProvider>
  </StrictMode>,
)

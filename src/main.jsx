import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './routes/Error/index.jsx'
import Home from './routes/Home/index.jsx'
import Aparelhos from './routes/Aparelhos/index.jsx'
import VisualizarAparelhos from './routes/VisualizarAparelhos/index.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/aparelhos',
        element: <Aparelhos/>
      },
      {
        path: '/aparelhos/visualizar/:marca/:modelo',
        element: <VisualizarAparelhos/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

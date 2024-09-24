import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { RouterProvider } from 'react-router-dom'
import { router } from './router.jsx'
import { Provider } from 'react-redux'
import { store } from './store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store} basename={import.meta.env.BASE_URL}>
    <RouterProvider router={router} />
  </Provider>
)

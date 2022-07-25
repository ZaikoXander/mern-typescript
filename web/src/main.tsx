import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import Router from './Router'

import Navbar from './components/Navbar/Navbar'

import 'react-toastify/dist/ReactToastify.css'
import "bootswatch/dist/pulse/bootstrap.min.css"
import "./styles/global.css"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>

      <Navbar />

      <div className="container p-4">
        <Router />
        <ToastContainer />
      </div>
    </BrowserRouter>
  </React.StrictMode>
)

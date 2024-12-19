import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Main from './main/main.jsx'
import Footer from './Footer/Footer.jsx'
import {HashRouter, Router, Route, Routes} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App/>
    </HashRouter>
    <Footer/>
  </StrictMode>,
)

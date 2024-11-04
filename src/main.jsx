import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Usercontext } from './components/level03'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Usercontext.Provider value="" />
    <App />
    <Usercontext.Provider value="" />
  </StrictMode>,
)

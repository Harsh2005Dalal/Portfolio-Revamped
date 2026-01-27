import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import WindowStateContext from './context/WindowStateContext.jsx'
import WindowZIndexContext from './context/WindowZIndexContext'

createRoot(document.getElementById('root')).render(
  <WindowZIndexContext>
    <WindowStateContext>
      <App />
    </WindowStateContext>
  </WindowZIndexContext>
)

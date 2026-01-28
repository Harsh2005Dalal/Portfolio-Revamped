import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import WindowStateContext from './context/WindowStateContext.jsx'
import WindowZIndexContext from './context/WindowZIndexContext'
import WindowFullScreenContext from './context/WindowFullScreenContext.jsx'

createRoot(document.getElementById('root')).render(
  <WindowFullScreenContext>
  <WindowZIndexContext>
    <WindowStateContext>
      <App />
    </WindowStateContext>
  </WindowZIndexContext>
  </WindowFullScreenContext>
)

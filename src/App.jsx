import { useState } from 'react'
import './app.scss'
import Dock from './components/Dock'
import Nav from './components/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Nav/>
      <Dock/>
    </main>
  )
}

export default App

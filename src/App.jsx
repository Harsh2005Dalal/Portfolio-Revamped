import { useContext, useState } from 'react'
import './app.scss'
import Dock from './components/Dock'
import Nav from './components/Nav'
import MacWindow from './components/windows/MacWindow'
import Github from './components/windows/Github'
import Note from './components/windows/Note'
import Resume from './components/windows/Resume'
import Spotify from './components/windows/Spotify'
import Cli from './components/windows/Cli'
import { WindowStateContextData } from './context/WindowStateContext'

function App() {

  const data = useContext(WindowStateContextData);
  const setWindowState = data.setWindowState;
  const windowState = data.windowState;
  return (
    <main>
      <Nav/>
      <Dock/>

      {windowState.github && <Github windowName="github"/>}
      {windowState.note && <Note windowName="note"/>}
      {windowState.resume && <Resume windowName="resume"/>}
      {windowState.spotify && <Spotify windowName="spotify"/>}
      {windowState.cli && <Cli windowName="cli"/>}
    </main>
  )
}

export default App

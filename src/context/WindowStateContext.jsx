import React, { useState } from 'react'
import { createContext } from 'react'

export const WindowStateContextData = createContext(null);

const WindowStateContext = (props) => {
    const [windowState, setWindowState] = useState({
        github:false,
        note:false,
        resume:false,
        spotify:false,
        cli:false
      })
  return (
    <WindowStateContextData.Provider value={{windowState,setWindowState}}>
        {props.children}
    </WindowStateContextData.Provider>
  )
}

export default WindowStateContext

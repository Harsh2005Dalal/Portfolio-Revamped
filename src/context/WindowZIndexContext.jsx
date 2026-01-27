import React, { createContext, useState } from 'react'

export const WindowZIndexContextData = createContext(null)
const WindowZIndexContext = (props) => {
    const [windowZIndex, setWindowZIndex] = useState({
        github:0,
        note:0,
        resume:0,
        spotify:0,
        cli:0
    })
  return (
        <WindowZIndexContextData.Provider value={{windowZIndex,setWindowZIndex}}>
            {props.children}
        </WindowZIndexContextData.Provider>
  )
}

export default WindowZIndexContext


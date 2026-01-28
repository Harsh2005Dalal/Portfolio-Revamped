import React, { createContext, useContext, useState } from 'react'

export const WindowFullScreenContextData = createContext(null)
const WindowFullScreenContext = (props) => {
    const [windowFullScreen, setWindowFullScreen] = useState({
        github:{
            height:"0vh",
            width:"0vw",
            x:0,
            y:0,
            isFullScreen : false
        },
        note:{
            height:"0vh",
            width:"0vw",
            x:0,
            y:0,
            isFullScreen: false
        },
        resume:{
            height:"0vh",
            width:"0vw",
            x:0,
            y:0,
            isFullScreen: false
        },
        spotify:{
            height:"0vh",
            width:"0vw",
            x:0,
            y:0,
            isFullScreen : false
        },
        cli:{
            height:"0vh",
            width:"0vw",
            x:0,
            y:0,
            isFullScreen: false
        }
    })
  return (
    <WindowFullScreenContextData.Provider value = {{windowFullScreen, setWindowFullScreen}}>
        {props.children}
    </WindowFullScreenContextData.Provider>
  )
}

export default WindowFullScreenContext

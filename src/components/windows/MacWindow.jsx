import React, { useContext } from 'react'
import {Rnd} from 'react-rnd'
import './macwindow.scss'
import { WindowStateContextData } from '../../context/WindowStateContext';
import { WindowZIndexContextData } from '../../context/WindowZIndexContext';

const MacWindow = ({children, height = "50vh", width = "30vw" ,windowName}) => {
    const windowStateData = useContext(WindowStateContextData);
    const setWindowState = windowStateData.setWindowState;

    const windowZIndexData = useContext(WindowZIndexContextData)
    const windowZIndex = windowZIndexData.windowZIndex;
    const setWindowZIndex = windowZIndexData.setWindowZIndex;

  return (
    <Rnd default={{
        width:width,
        height:height,
            x:300,
            y:200
        }}
        style={{ zIndex: windowZIndex[windowName] , position: "relative",  }}
        onMouseDown={()=>{
            const maxValue = Math.max(...Object.values(windowZIndex));
            {setWindowZIndex(state=>({...state,[windowName]:maxValue+1}))};
            console.log(maxValue)
        }}
    >
        <div 
            className="window no-bar">
            <div className="nav">
                <div className="dots">
                    <div 
                        onClick={() => {setWindowState(state=>({...state,[windowName]:false}))}}
                        className="dot red"></div>
                    <div className="dot yellow"></div>
                    <div className="dot green"></div>
                </div>

                <div className="title">
                    <p>harshdalal-zsh</p>
                </div>
            </div>
            <div className="main-content">
                {children}
            </div>
        </div>
    </Rnd>
  )
}

export default MacWindow

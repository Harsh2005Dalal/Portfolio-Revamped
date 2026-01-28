import React, { useContext, useState } from 'react'
import {Rnd} from 'react-rnd'
import './macwindow.scss'
import { WindowStateContextData } from '../../context/WindowStateContext';
import { WindowZIndexContextData } from '../../context/WindowZIndexContext';
import {WindowFullScreenContextData} from '../../context/WindowFullScreenContext';

const MacWindow = ({children, height = "50vh", width = "30vw" ,windowName}) => {
    const windowStateData = useContext(WindowStateContextData);
    const setWindowState = windowStateData.setWindowState;

    const windowZIndexData = useContext(WindowZIndexContextData)
    const windowZIndex = windowZIndexData.windowZIndex;
    const setWindowZIndex = windowZIndexData.setWindowZIndex;

    const windowFullScreenData = useContext(WindowFullScreenContextData);
    const setWindowFullScreen = windowFullScreenData.setWindowFullScreen
    const windowFullScreen = windowFullScreenData.windowFullScreen

    const [box, setBox] = useState({
        x:300,
        y:200,
        width:"30vw",
        height:"50vh"
    })

    // const initials = ()=>{setBox({...box,width:width, height:height})};
    // initials();

    const fullScreen = ()=>{
        console.log(windowName)
        if(windowFullScreen[windowName].isFullScreen)
            {
                setBox({x:windowFullScreen[windowName].x, y:windowFullScreen[windowName].y, width:windowFullScreen[windowName].width, height:windowFullScreen[windowName].height})
                setWindowFullScreen({...windowFullScreen,[windowName]:{x:0, y:0, height:"100vh", width:"100vw", isFullScreen: false}});
            }
            else{
            console.log("LULU")
            setWindowFullScreen({...windowFullScreen,[windowName]:{x:box.x, y:box.y, height:box.height, width:box.width, isFullScreen: true}});
            setBox({x:0, y:0, width:"100vw", height:"100vh"})
            console.log(windowFullScreen);
            console.log(box)
        }
    };


  return (
    <Rnd size={{
        width:box.width,
        height:box.height}}
        position={{
            x:box.x,
            y:box.y
        }}

        onDragStop={(e, d) =>
            setBox(prev => ({ ...prev, x: d.x, y: d.y }))
        }
    
        onResizeStop={(e, dir, ref, delta, pos) =>
            setBox({
                x: pos.x,
                y: pos.y,
                width: ref.offsetWidth,
                height: ref.offsetHeight,
            })
        }

        style={{ zIndex: windowZIndex[windowName]  }}
        onMouseDown={()=>{
            const maxValue = Math.max(...Object.values(windowZIndex));
            {setWindowZIndex(state=>({...state,[windowName]:maxValue+1}))};
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
                    <div 
                        onClick={()=>{fullScreen()}}
                    className="dot green"></div>
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

import React, { useContext } from 'react'
import './dock.scss'
import { WindowStateContextData } from '../context/WindowStateContext'


const DockShadow = ({active})=>{

  if(!active) return null;

  return  (
    <div className="icon-line"
    />
  );
}
const Dock = () => {
  const data = useContext(WindowStateContextData);
  const windowState = data.windowState;
  const setWindowState = data.setWindowState;
  return (
    <footer className="dock">
      <div
        onClick={() => { setWindowState(state => ({ ...state, github: true })) }}
        className="icon github"><img src="/dock-icons/github.svg" alt=""/>
         <DockShadow active={windowState.github} />
        </div>
      
      <div
        onClick={() => { setWindowState(state => ({ ...state, note: true })) }}
        className="icon note"><img src="/dock-icons/note.svg" alt="" />
         <DockShadow active={windowState.note} />
        </div>
      <div
        onClick={() => { setWindowState(state => ({ ...state, resume: true })) }}
        className="icon pdf"><img src="/dock-icons/pdf.svg" alt="" />
         <DockShadow active={windowState.resume} />
        </div>
      <div
        onClick={() => { window.open("https://calendar.google.com/", "_blank") }}
        className="icon calender"><img src="/dock-icons/calender.svg" alt="" /></div>
      <div
        onClick={() => { setWindowState(state => ({ ...state, spotify: true })) }}
        className="icon spotify"><img src="/dock-icons/spotify.svg" alt="" />
         <DockShadow active={windowState.spotify} />
        </div>
      <div
        onClick={() => {
          const subject = encodeURIComponent("Hello Harsh");
          const body = encodeURIComponent("I found your portfolio");

          window.open(
            `https://mail.google.com/mail/?view=cm&fs=1&to=harsh2005dalalwork@gmail.com&subject=${subject}&body=${body}`,
            "_blank"
          );
        }}
        className="icon mail"><img src="/dock-icons/mail.svg" alt="" />
      </div>
      <div
        onClick={() => { window.open("https://www.linkedin.com/in/harsh-dalal-5a4161280/", "_blank") }}
        className="icon link"><img src="/dock-icons/link.svg" alt="" /></div>
      <div
        onClick={() => { setWindowState(state => ({ ...state, cli: true })) }}
        className="icon cli"><img src="/dock-icons/cli.svg" alt="" />
         <DockShadow active={windowState.cli} />
        </div>
    </footer>
  )
}

export default Dock

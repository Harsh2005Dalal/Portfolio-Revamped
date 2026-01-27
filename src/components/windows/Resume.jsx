import React from 'react'
import './resume.scss'
import MacWindow from './MacWindow'

const Resume = ({windowName}) => {
  return (
    <MacWindow windowName={windowName}>
        <div className="resume-window">
            <embed src="/resume.pdf" frameborder="0"></embed>
        </div>
    </MacWindow>
  )
}

export default Resume

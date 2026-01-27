import React, { useEffect, useState } from 'react'
import './note.scss'
import Markdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import MacWindow from './MacWindow'

const Note = ({windowName}) => {
    const [markdown, setMarkdown] = useState(null);

    const gettingData = async ()=>{
        const data = await fetch("/note.txt");
        const text = await data.text();
        setMarkdown(text);
    };

    useEffect(() => {
        gettingData();
    }, [])

    
  return (
    <MacWindow windowName={windowName}>
        <div className="note-window">
            {markdown?<SyntaxHighlighter language="typescript" style={atelierDuneDark}>{markdown}</SyntaxHighlighter> : <p>Loading...</p>}
        </div>
    </MacWindow>
  )
}

export default Note

import React, { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export default function MarkdownConverter() {
  // variable contains user input which is to be converted into HTML
  const [userTextInput, setUserTextInput] = useState()

  // variable contains the converted markdown text(HTML) to be displayed in Preview window
  const [markdownText, setMarkdownText] = useState()

  // function to handle change on INPUT window
  function handleChange(e) {
    setUserTextInput(e.target.value)

    // makes a POST request using fetch to localhost8080/convert which sends user input and gets the converted markdown HTML text
    try{
      fetch('http://localhost:8080/convert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({content: userTextInput})
      }).then(response => {
        if(!response.ok){
          throw new Error('Network response was not ok');
        }
        return response.json();
      }).then(data => {
        setMarkdownText(data.markdown);

      }).catch(err => {
        console.error('Error:', err);
      })

    }catch(error){
      console.error('Error:', error);
    }

    e.preventDefault();
  }

  return (
    <div className="App">
      <div className="wrapper">
        
        <div className="input">
          INPUT
        </div>

        {/* text area for user to input text */}
        <textarea
          autoFocus
          className="textarea"
          value={userTextInput}
          onChange={handleChange}
        ></textarea>
      </div>

      <div className="wrapper">

        {/* live preview window */}
        <div className="input">
          PREIVEW
        </div>

        {/* this code block adds syntax highliting to HTML */}
        <SyntaxHighlighter language="javascript" style={docco}>
          { markdownText }
        </SyntaxHighlighter>
      </div>

    </div>
  )
}

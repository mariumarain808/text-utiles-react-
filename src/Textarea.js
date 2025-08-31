import React, { useState } from 'react';

export default function Textarea() {
  const [text, setText] = useState("");

  const handleupclick = () => {
    console.log("uppercase click");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleloclick = () => {
    console.log("lowercase click");
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handlescopy = () => {
    navigator.clipboard.writeText(text.trim());
    alert("Text copied to clipboard!");
  };

  const handleclclick = () => {
    console.log("clear text");
    setText('');
  };

  const handleonchange = (event) => {
    console.log("onchange");
    setText(event.target.value);
  };

  return (
    <>
      <div className="text-center">
        <h1 className="text-success">Text Utils</h1>
        <textarea
          placeholder="Leave a comment here"
          onChange={handleonchange} 
          value={text}
          rows="10"
          cols="100"
          className='bg-warning-subtle'
        />
        <br />
        <button className="btn btn-danger" onClick={handleupclick}>CHANGETOUPPERCASE</button>
        <button className="btn btn-warning mx-2 my-1" onClick={handleloclick}>changetolowercase</button>
        <button className="btn btn-success mx-2 my-1" onClick={handlescopy}>Copy</button>
        <button className="btn btn-info" onClick={handleclclick}>Clear</button>
      </div>
      <div className='text-center'>
        <h1>Your text summary</h1>
        <p>{text.split(" ").filter((element) => element.length !== 0).length} words {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element) => element.length !== 0).length} minute read</p>
      </div>
    </>
  );
}

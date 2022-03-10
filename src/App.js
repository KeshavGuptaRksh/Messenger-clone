import React, { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const changeUpper = () => {
    setText(text.toUpperCase());
  };
  const changeLower = () => {
    setText(text.toLowerCase());
  };
  const clearText = () => {
    setText("");
  };
  return (
    <div className="App">
      <textarea
        rows="10"
        cols="100"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button onClick={changeUpper}>Upper Case</button>
      <button onClick={changeLower}>Lower Case</button>
      <button onClick={clearText}>Clear Text</button>
      <hr></hr>

      <p>
        <strong>Word Count : </strong>
        {text == "" ? 0 : text.split(" ").length}
      </p>
      <p>
        <strong>Character Count : </strong>
        {text.length}
      </p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
  );
}

export default App;

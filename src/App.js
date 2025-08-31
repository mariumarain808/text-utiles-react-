import Navbar from './Navbar.js';
import Textarea from './Textarea.js';
import About from './About.js';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";   // set background
      document.body.style.color = "white";            // set text color
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };

  return (
    <Router>
      <Navbar title="marium" mode={mode} toggleMode={toggleMode} />
      <Routes>
        <Route path="/" element={<Textarea mode={mode} />} />
        <Route path="/about" element={<About mode={mode} />} />
        <Route path="/textarea" element={<Textarea mode={mode} />} />
      </Routes>
    </Router>
  );
}

export default App;

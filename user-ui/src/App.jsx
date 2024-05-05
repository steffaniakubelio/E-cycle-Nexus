
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './components/Home';
import CameraComponent from './components/CameraComponent';
import Detect from './components/Detect';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <h1>My App</h1> */}
        <Routes> 
          <Route path="/" element={<Home />} /> 
          <Route path="/camera" element={<CameraComponent />} />
          <Route path="/detect" element={<Detect />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;

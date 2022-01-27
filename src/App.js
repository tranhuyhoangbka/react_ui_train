import React, {Component} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import App2 from './components/App2';
import Error from './components/Error';
import Calendar from './components/Calendar';
import Home from './components/Home';

function App() {  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app2" element={<App2 />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;

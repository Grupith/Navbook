import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard'


function App() {

  return (
    <div className='App'>
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='Dashboard' element={<Dashboard />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;

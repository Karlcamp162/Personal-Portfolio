import './App.css';
import React from 'react';
import Home from './pages/Home';
import Project from './pages/Project';
import Gallery from './pages/Gallery';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/project' element={<Project/>} />
      <Route path='/Gallery' element={<Gallery/>} />
    </Routes>
  );
}

export default App;

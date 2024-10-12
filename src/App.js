// src/App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormPage from './components/FormPage/FormPage'
import DisplayPage from './components/DisplayPage/DisplayPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/display" element={<DisplayPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
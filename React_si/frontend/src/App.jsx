import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import List from "./components/List";
import AddInternship from './components/AddInternship';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<List/>} />
        <Route path="/add-internship" element={<AddInternship/>} />
      </Routes>
    </Router>
  );
}

export default App;
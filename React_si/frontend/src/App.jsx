import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import List from "./components/List";
import DelModInternsip from "./components/DelModInternship";
import AddInternship from './components/AddInternship';
import AddEntreprise from './components/AddEntreprise';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<List/>} />
        <Route path="/DelModInternship" element={<DelModInternsip />} />
        <Route path="/AddInternship" element={<AddInternship/>} />
        <Route path="/add-entreprise" element={<AddEntreprise/>} />
      </Routes>
    </Router>
  );
}

export default App;

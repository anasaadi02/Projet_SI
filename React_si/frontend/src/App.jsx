import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import List from "./components/List";
<<<<<<< HEAD
import AddInternship from "./components/AddInternship";
import DelModInternsip from "./components/DelModInternship";
=======
import AddInternship from './components/AddInternship';
import AddEntreprise from './components/AddEntreprise';

>>>>>>> 471a65cab77986e247f8c9916ebcb607b7c371b3

function App() {
  return (
    <Router>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<List />} />
        <Route path="/AddInternship" element={<AddInternship />} />
        <Route path="/DelModInternship" element={<DelModInternsip />} />
=======
        <Route path="/" element={<List/>} />
        <Route path="/add-internship" element={<AddInternship/>} />
        <Route path="/add-entreprise" element={<AddEntreprise/>} />
>>>>>>> 471a65cab77986e247f8c9916ebcb607b7c371b3
      </Routes>
    </Router>
  );
}

export default App;

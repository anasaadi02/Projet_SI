import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import List from "./components/List";
import AddInternship from "./components/AddInternship";
import DelModInternsip from "./components/DelModInternship";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/AddInternship" element={<AddInternship />} />
        <Route path="/DelModInternship" element={<DelModInternsip />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import List from "./List";

const DelModInternship = () => {
  return (
    <div>
      <h2 className="add-title">Modifier les infos du stage</h2>

      <button className="delete-button">supprimer</button>
      <button className="modify-button">modifier</button>
    </div>
  );
};

export default DelModInternship;

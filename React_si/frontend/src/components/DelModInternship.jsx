import React from "react";
import "../styles/style.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import List from "./List";
import { useLocation } from "react-router-dom";

const DelModInternship = () => {
  const location = useLocation();
  const { rowData } = location.state || {};
  return (
    <div>
      <h2 className="add-title">Modifier les infos du stage</h2>
      {rowData && (
        <div>
          <table>
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Promo</th>
                <th scope="col">N°Etudiant</th>
                <th scope="col">Professeur</th>
                <th scope="col">Tuteur</th>
                <th scope="col">Entreprise</th>
                <th scope="col">Domaine</th>
                <th scope="col">Année</th>
                <th scope="col">Compte rendu</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{rowData.id}</th>
                <td>{rowData.Promo}</td>
                <td>{rowData.NEtudiant}</td>
                <td>{rowData.Professeur}</td>
                <td>{rowData.Tuteur}</td>
                <td>{rowData.Entreprise}</td>
                <td>{rowData.Domaine}</td>
                <td>{rowData.Année}</td>
                <td>{rowData.CompteRendu}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      <button className="delete-button">supprimer</button>
      <button className="modify-button">modifier</button>
    </div>
  );
};

export default DelModInternship;

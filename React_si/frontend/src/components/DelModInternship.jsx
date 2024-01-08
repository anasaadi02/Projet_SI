import React, { useState } from "react";
import "../styles/style.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import List from "./List";
import { useLocation, useNavigate } from "react-router-dom";

const DelModInternship = () => {
  const location = useLocation();
  const { rowData } = location.state || {};
  const [isPopUpDel, setIsPopUpDel] = useState(false);
  const [isPopUpMod, setIsPopUpMod] = useState(false);

  let navigation = useNavigate();

  const afterModDel = (buttonId) => {
    {
      if (buttonId == "delete-button") {
        setIsPopUpDel(true);
      } else setIsPopUpMod(true);
    }
  };
  const stayinpagedel = () => {
    setIsPopUpDel(false);
  };
  const stayinpagemod = () => {
    setIsPopUpMod(false);
  };
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
      <div className="buttons-container">
        <button
          className="delete-button"
          id="delete-button"
          onClick={() => afterModDel("delete-button")}
        >
          supprimer
        </button>

        <button
          className="modify-button"
          id="modify-button"
          onClick={() => afterModDel("modify-button")}
        >
          modifier
        </button>
      </div>

      {isPopUpDel && (
        <div className="popup">
          <div className="popup-content-del">
            <h4>le stage va être supprimer</h4>
            <div>
              <button onClick={() => navigation("/")}>valider</button>
              <button onClick={stayinpagedel} className="retour">
                retour
              </button>
            </div>
          </div>
        </div>
      )}
      {isPopUpMod && (
        <div className="popup">
          <div className="popup-content-mod">
            <h4>le stage va être modifier</h4>
            <button onClick={() => navigation("/")}>valider</button>
            <button onClick={stayinpagemod} className="retour">
              retour
            </button>
          </div>
        </div>
      )}
      <div>
        <form className="form-container">
          <div className="form-row">
            <label className="add-labels">
              Entreprise
              <input type="text" className="add-inputs"></input>
            </label>
            <br />
            <label className="add-labels">
              Sujet
              <input type="text" className="add-inputs"></input>
            </label>
          </div>
          <div className="form-row">
            <label className="add-labels">
              Tuteur
              <input type="text" className="add-inputs"></input>
            </label>
            <br />
            <label className="add-labels">
              Promo
              <input type="text" className="add-inputs"></input>
            </label>
          </div>
          <div className="form-row">
            <label className="add-labels">
              date débu
              <input type="date" className="add-inputs"></input>
            </label>
            <br />
            <label className="add-labels">
              date fin
              <input type="date" className="add-inputs"></input>
            </label>
          </div>
          <div className="form-row">
            <label className="add-labels">
              Professeur
              <input type="text" className="add-inputs"></input>
            </label>
            <br />
            <label className="add-labels">
              N°Etudiant
              <input type="text" className="add-inputs"></input>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DelModInternship;

import React, { useState } from "react";
import "../styles/style.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import List from "./List";
import { useLocation, useNavigate } from "react-router-dom";

const DelModInternship = () => {
  const [promo, setPromo] = useState("");
  const [nEtudiant, setNEtudiant] = useState("");
  const [prof, setProf] = useState("");
  const [tuteur, setTuteur] = useState("");
  const [tpe, setTpe] = useState("");
  const [annee, setAnnee] = useState("");
  const [compte_rendu, setCompte_rendu] = useState("");
  const [entreprise, setEntreprise] = useState("");


  const location = useLocation();
  const { rowData } = location.state || {};
  const [isPopUpDel, setIsPopUpDel] = useState(false);
  const [isPopUpMod, setIsPopUpMod] = useState(false);

  console.log(rowData)

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
                <th scope="row">{rowData.nStage}</th>
                <td>{rowData.promo}</td>
                <td>{rowData.nEtudiant}</td>
                <td>{rowData.prof}</td>
                <td>{rowData.tuteur}</td>
                <td>{rowData.entreprise}</td>
                <td>{rowData.tpe}</td>
                <td>{rowData.annee}</td>
                <td>{rowData.compte_rendu}</td>
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
              Promo
              <input type="text" className="add-inputs" value={promo} onChange={(e) => setPromo(e.target.value)} />
            </label>
            <br />
            <label className="add-labels">
              N°Etudiant
              <input type="text" className="add-inputs" value={nEtudiant} onChange={(e) => setNEtudiant(e.target.value)} />
            </label>
          </div>
          <div className="form-row">
            <label className="add-labels">
              Professeur
              <input type="text" className="add-inputs" value={prof} onChange={(e) => setProf(e.target.value)} />
            </label>
            <br />
            <label className="add-labels">
              Tuteur
              <input type="text" className="add-inputs" value={tuteur} onChange={(e) => setTuteur(e.target.value)} />
            </label>
          </div>
          <div className="form-row">
            <label className="add-labels">
              Type
              <input type="text" className="add-inputs" value={tpe} onChange={(e) => setTpe(e.target.value)} />
            </label>
            <br />
            <label className="add-labels">
              Année
              <input type="text" className="add-inputs" value={annee} onChange={(e) => setAnnee(e.target.value)} />
            </label>
          </div>
          <div className="form-row">
            <label className="add-labels">
              Compte rendu
              <input type="text" className="add-inputs" value={compte_rendu} onChange={(e) => setCompte_rendu(e.target.value)} />
            </label>
            <br />
            <label className="add-labels">
              Company
              <input type="text" className="add-inputs" value={entreprise} onChange={(e) => setEntreprise(e.target.value)} />
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DelModInternship;

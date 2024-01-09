import React, { useState } from "react";
import "../styles/style.css";

const AddInternship = () => {
  const [promo, setPromo] = useState("");
  const [nEtudiant, setNEtudiant] = useState("");
  const [prof, setProf] = useState("");
  const [tuteur, setTuteur] = useState("");
  const [tpe, setTpe] = useState("");
  const [annee, setAnnee] = useState("");
  const [compte_rendu, setCompte_rendu] = useState("");
  const [entreprise, setEntreprise] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRow = {
      promo: promo,
      nEtudiant: nEtudiant,
      prof: prof,
      tuteur: tuteur,
      tpe: tpe,
      annee: annee,
      compte_rendu: compte_rendu,
      entreprise: entreprise,
    };



    fetch(`${import.meta.env.VITE_ADD_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newRow),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

    setPromo("");
    setNEtudiant("");
    setProf("");
    setTuteur("");
    setTpe("");
    setAnnee("");
    setCompte_rendu("");
    setEntreprise("");
    };

  return (
    <div className="add">
      <h2 className="add-title">Ajouter les infos du stage</h2>
      <div className="add1">
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="form-row">
            <label className="add-labels">
              Promo
              <input
                placeholder="..."
                className="add-inputs"
                type="text"
                value={promo}
                onChange={(e) => setPromo(e.target.value)}
              />
            </label>
            <br />
            <label className="add-labels">
              Student Number
              <input
                placeholder="..."
                className="add-inputs"
                type="text"
                value={nEtudiant}
                onChange={(e) => setNEtudiant(e.target.value)}
              />
            </label>
          </div>
          <br />
          <div className="form-row">
            <label className="add-labels">
              Professor
              <input
                placeholder="..."
                className="add-inputs"
                type="text"
                value={prof}
                onChange={(e) => setProf(e.target.value)}
              />
            </label>
            <br />
            <label className="add-labels">
              Tutor
              <input
                placeholder="..."
                className="add-inputs"
                type="text"
                value={tuteur}
                onChange={(e) => setTuteur(e.target.value)}
              />
            </label>
          </div>
          <br />
          <div className="form-row">
            <label className="add-labels">
              Type
              <input
                placeholder="..."
                className="add-inputs"
                type="text"
                value={tpe}
                onChange={(e) => setTpe(e.target.value)}
              />
            </label>
            <br />
            <label className="add-labels">
              Year
              <input
                placeholder="..."
                className="add-inputs"
                type="text"
                value={annee}
                onChange={(e) => setAnnee(e.target.value)}
              />
            </label>
          </div>
          <br />
          <div className="form-row">
            <label className="add-labels">
              Report
              <input
                placeholder="..."
                className="add-inputs"
                type="text"
                value={compte_rendu}
                onChange={(e) => setCompte_rendu(e.target.value)}
              />
            </label>
            <br />
            <label className="add-labels">
              Company
              <input
                placeholder="..."
                className="add-inputs"
                type="text"
                value={entreprise}
                onChange={(e) => setEntreprise(e.target.value)}
              />
            </label>
          </div>
          <br />
          <button className="Add-button" type="submit">
            Ajouter
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddInternship;
import React, { useState } from "react";

const AddInternship = () => {
  const [entreprise, setEntreprise] = useState("");
  const [domaine, setDomaine] = useState("");
  const [encadrant, setEncadrant] = useState("");
  const [sujet, setSujet] = useState("");
  const [compte_rendu, setCompte_rendu] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Company Name:", entreprise);
    console.log("Domain:", domaine);
    console.log("Supervisor Name:", encadrant);

    setEntreprise("");
    setDomaine("");
    setEncadrant("");
    setSujet("");
    setCompte_rendu("");
  };

  return (
    <div className="add">
      <h2 className="add-title">Ajouter les infos du stage</h2>
      <div className="add1">
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="form-row">
            <label className="add-labels">
              nom d'entreprise
              <input
                placeholder="..."
                className="add-inputs"
                type="text"
                value={entreprise}
                onChange={(e) => setEntreprise(e.target.value)}
              />
            </label>
            <br />
            {/* <label className="add-labels">
            domaine:
            <input
              placeholder="..."
              className="add-inputs"
              type="text"
              value={domaine}
              onChange={(e) => setDomaine(e.target.value)}
            />
          </label>
          <br /> */}

            <label className="add-labels">
              sujet
              <input
                placeholder="..."
                className="add-inputs"
                type="text"
                value={sujet}
                onChange={(e) => setSujet(e.target.value)}
              />
            </label>
          </div>
          <div className="form-row">
            <label className="add-labels">
              l'encadrant
              <input
                placeholder="..."
                className="add-inputs"
                type="text"
                value={encadrant}
                onChange={(e) => setEncadrant(e.target.value)}
              />
            </label>
            <br />
            <label className="add-labels">
              compte rendu
              <input
                placeholder="..."
                className="add-inputs"
                type="text"
                value={compte_rendu}
                onChange={(e) => setCompte_rendu(e.target.value)}
              />
            </label>
          </div>

          <div className="form-row">
            <label className="add-labels">
              date début
              <input type="date" className="add-inputs"></input>
            </label>
            <br />
            <label className="add-labels">
              date fin
              <input type="date" className="add-inputs"></input>
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
};

export default AddInternship;

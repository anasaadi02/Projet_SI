import React, { useState } from "react";
import "../styles/style.css";

const AddEntreprise = () => {
  const [numSiret, setNumSiret] = useState("");
  const [formeJuridique, setFormeJuridique] = useState("");
  const [raisonSociale, setRaisonSociale] = useState("");
  const [adresse, setAdresse] = useState("");
  const [suite, setSuite] = useState("");
  const [codePostal, setCodePostal] = useState("");
  const [ville, setVille] = useState("");
  const [telephone, setTelephone] = useState("");
  const [fax, setFax] = useState("");
  const [contact, setContact] = useState("");
  const [telContact, setTelContact] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("N°Siret:", numSiret);
    console.log("Forme juridique:", formeJuridique);
    console.log("Raison sociale:", raisonSociale);
    console.log("Adresse:", adresse);
    console.log("Suite:", suite);
    console.log("Code postal:", codePostal);
    console.log("Ville:", ville);
    console.log("Téléphone:", telephone);
    console.log("Fax:", fax);
    console.log("Contact:", contact);
    console.log("Tél contact:", telContact);

    // Reset form fields
    setNumSiret("");
    setFormeJuridique("");
    setRaisonSociale("");
    setAdresse("");
    setSuite("");
    setCodePostal("");
    setVille("");
    setTelephone("");
    setFax("");
    setContact("");
    setTelContact("");
  };

  return (
    <div className="add">
      <h2 className="add-title">Ajouter les infos de l'entreprise</h2>
      <div className="add1">
        <form onSubmit={handleSubmit} className="form-container">
        <div className="form-row">
          <label className="add-labels">
            N°Siret :
            <input
              placeholder="..."
              className="add-inputs"
              value={numSiret}
              onChange={(e) => setNumSiret(e.target.value)}
            />
          </label>
          <br />
          <label className="add-labels">
            Forme juridique :
            <div>
              <label>
                <input
                  type="radio"
                  value="SA"
                  checked={formeJuridique === "SA"}
                  onChange={() => setFormeJuridique("SA")}
                />
                SA
              </label>
              <br />
              <label>
                <input
                  className="radio"
                  type="radio"
                  value="SARL"
                  checked={formeJuridique === "SARL"}
                  onChange={() => setFormeJuridique("SARL")}
                />
                SARL
              </label>
              {/* Add more radio options as needed */}
            </div>
          </label>
          </div>
          <br />
          <div className="form-row">
          <label className="add-labels">
            Raison sociale :
            <input
              placeholder="..."
              className="add-inputs"
              type="text"
              value={raisonSociale}
              onChange={(e) => setRaisonSociale(e.target.value)}
            />
          </label>
          <br />
          <label className="add-labels">
            Adresse :
            <input
              placeholder="..."
              className="add-inputs"
              type="text"
              value={adresse}
              onChange={(e) => setAdresse(e.target.value)}
            />
          </label>
          </div>
          <br />
          <div className="form-row">
          <label className="add-labels">
            Suite :
            <input
              placeholder="..."
              className="add-inputs"
              type="text"
              value={suite}
              onChange={(e) => setSuite(e.target.value)}
            />
          </label>
          <br />
          <label className="add-labels">
            Code postal :
            <input
              placeholder="..."
              className="add-inputs"
              type="text"
              value={codePostal}
              onChange={(e) => setCodePostal(e.target.value)}
            />
          </label>
          </div>
          <br />
          <div className="form-row">
          <label className="add-labels">
            Ville :
            <input
              placeholder="..."
              className="add-inputs"
              type="text"
              value={ville}
              onChange={(e) => setVille(e.target.value)}
            />
          </label>
          <br />
          <label className="add-labels">
            Téléphone :
            <input
              placeholder="..."
              className="add-inputs"
              type="tel"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
            />
          </label>
          </div>
          <br />
          <div className="form-row">
          <label className="add-labels">
            Fax :
            <input
              placeholder="..."
              className="add-inputs"
              type="tel"
              value={fax}
              onChange={(e) => setFax(e.target.value)}
            />
          </label>
          <br />
          <label className="add-labels">
            Contact :
            <input
              placeholder="..."
              className="add-inputs"
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </label>
          </div>
          <br />
          <label className="add-labels">
            Tél contact :
            <input
              placeholder="..."
              className="add-inputs"
              type="tel"
              value={telContact}
              onChange={(e) => setTelContact(e.target.value)}
            />
          </label>
          <br />
          <button className="Add-button" type="submit">
            Ajouter :
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEntreprise;

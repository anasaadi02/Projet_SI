import React, { useState } from "react";
import "../styles/style.css";
import { useNavigate } from "react-router-dom";

const AddEntreprise = () => {
  const [nom, setNom] = useState("");
  const [nSiret, setNumSiret] = useState("");
  const [fJuridique, setFormeJuridique] = useState("");
  const [rSociale, setRaisonSociale] = useState("");
  const [adresse, setAdresse] = useState("");
  const [suite, setSuite] = useState("");
  const [codeP, setCodePostal] = useState("");
  const [ville, setVille] = useState("");
  const [Tele, setTelephone] = useState("");
  const [FAX, setFax] = useState("");
  const [contact, setContact] = useState("");
  const [teleContact, setTelContact] = useState("");

  let navigation = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newEntreprise = {
        nom,
        nSiret,
        fJuridique,
        rSociale,
        adresse,
        suite,
        codeP,
        ville,
        Tele,
        FAX,
        contact,
        teleContact,
      };

      console.log(newEntreprise);

      fetch(`${import.meta.env.VITE_ADDE_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEntreprise),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });

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
    } catch (error) {
      console.error("Error:", error);
    }

    navigation("/")

  };

  return (
    <div className="add">
      <h2 className="add-title">Ajouter les infos de l'entreprise</h2>
      <button
        className="retour-but"
        type="submit"
        onClick={() => navigation("/")}
      >
        retour
      </button>
      <div className="add1">
        <form onSubmit={handleSubmit} className="form-container">
          <div className="form-row">
          <label className="add-labels">
              Nom :
              <input
                placeholder="..."
                className="add-inputs"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                />
            </label>
            <label className="add-labels">
              N°Siret :
              <input
                placeholder="..."
                className="add-inputs"
                value={nSiret}
                onChange={(e) => setNumSiret(e.target.value)}
                />
            </label>
            </div>
            <br />
            <div className="form-row">
            <label className="add-labels">
              Forme juridique :
              <div>
                <label>
                  <input
                    type="radio"
                    value="SA"
                    checked={fJuridique === "SA"}
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
                    checked={fJuridique === "SARL"}
                    onChange={() => setFormeJuridique("SARL")}
                  />
                  SARL
                </label>
                {/* Add more radio options as needed */}
              </div>
            </label>
          <br />
            <label className="add-labels">
              Raison sociale :
              <input
                placeholder="..."
                className="add-inputs"
                type="text"
                value={rSociale}
                onChange={(e) => setRaisonSociale(e.target.value)}
              />
            </label>
            </div>
            
            <br />
            <div className="form-row">
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
          <br />
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
            </div>
            <br />
            <div className="form-row">
            <label className="add-labels">
              Code postal :
              <input
                placeholder="..."
                className="add-inputs"
                type="text"
                value={codeP}
                onChange={(e) => setCodePostal(e.target.value)}
              />
            </label>
          <br />
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
            </div>
            <br />
            <div className="form-row">
            <label className="add-labels">
              Téléphone :
              <input
                placeholder="..."
                className="add-inputs"
                type="tel"
                value={Tele}
                onChange={(e) => setTelephone(e.target.value)}
              />
            </label>
          <br />
            <label className="add-labels">
              Fax :
              <input
                placeholder="..."
                className="add-inputs"
                type="tel"
                value={FAX}
                onChange={(e) => setFax(e.target.value)}
              />
            </label>
            </div>
            <br />
            <div className="form-row">
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
          <br />

          <label className="add-labels">
            Tél contact :
            <input
              placeholder="..."
              className="add-inputs"
              type="tel"
              value={teleContact}
              onChange={(e) => setTelContact(e.target.value)}
            />
          </label>
          <br/>
            </div>
          <br />
          <button
            className="Add-button"
            type="submit"
            onClick={() => handleSubmit}
          >
            Ajouter
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEntreprise;

import React, { useState, useEffect } from "react";
import "../styles/style.css";
import { useNavigate } from "react-router-dom";

const AddInternship = () => {
  const [promo, setPromo] = useState("");
  const [nEtudiant, setNEtudiant] = useState("");
  const [prof, setProf] = useState("");
  const [tuteur, setTuteur] = useState("");
  const [tpe, setTpe] = useState("");
  const [annee, setAnnee] = useState("");
  const [compte_rendu, setCompte_rendu] = useState("");
  const [entreprise, setEntreprise] = useState("");
  const [isPopUpConfirm, setIsPopUpConfirm] = useState(false);

  const afterAdd = () => {
    setIsPopUpConfirm(true);
  };
  let navigation = useNavigate();
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
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRow),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
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

  //fetch entreprise data:
  const [EntrdataList, setDataList] = useState([]);
  const [etudiantDataList, setEtudiantDataList] = useState(null);
  const [profDataList, setProfDataList] = useState(null);

  //hadi hia la fonction likatjib data mn django
  useEffect(() => {
    async function fetchData() {
      const baseUrl = import.meta.env.VITE_API_URL;
      const entrepriseUrl = `${baseUrl}entre/`; // Append the specific path
      const etudiantUrl = `${baseUrl}etudiant/`;
      const profUrl = `${baseUrl}prof/`;

      try {
        const response = await fetch(entrepriseUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok!");
        }
        const result = await response.json();
        console.log(result);

        setDataList(result);

        const etudiantResponse = await fetch(etudiantUrl);
        if (!etudiantResponse.ok) {
          throw new Error("Network response was not ok!");
        }
        const etudiantResult = await etudiantResponse.json();
        setEtudiantDataList(etudiantResult);

        // Fetch data from ProfesseurListView
        const profResponse = await fetch(profUrl);
        if (!profResponse.ok) {
          throw new Error("Network response was not ok!");
        }
        const profResult = await profResponse.json();
        setProfDataList(profResult);
      } catch {
        console.error("Error fetching data");
      }
    }
    fetchData();
  }, []);

  console.log(EntrdataList, "hhh");
  console.log(etudiantDataList);
  console.log(profDataList);

  return (
    <div className="add">
      <h2 className="add-title">Ajouter les infos du stage</h2>
      <button
        className="retour-but"
        type="submit"
        onClick={() => navigation("/")}
      >
        retour
      </button>
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
              N°Etudiant
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
              Professeur
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
              Tuteur
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
              Année
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
              Compte rendu
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
          <button className="Add-button" type="submit" onClick={afterAdd}>
            Ajouter
          </button>
          {isPopUpConfirm && (
            <div className="popup">
              <div className="popup-content-mod">
                <h4>le stage a été ajouté avec succès</h4>
                <button onClick={() => navigation("/")}>valider</button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default AddInternship;

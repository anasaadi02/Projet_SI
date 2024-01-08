import React from "react";
import "../styles/style.css";
import { Link, useNavigate } from "react-router-dom";

function List() {
  let dataList = [
    {
      id: 1,
      Promo: "2020-2023",
      NEtudiant: "...",
      Professeur: "...",
      Tuteur: "...",
      Entreprise: "...",
      Domaine: "...",
      Année: "...",
      CompteRendu: "...",
    },
    {
      id: 2,
      Promo: "2020-2023",
      NEtudiant: "...",
      Professeur: "...",
      Tuteur: "...",
      Entreprise: "...",
      Domaine: "...",
      Année: "...",
      CompteRendu: "...",
    },
    {
      id: 3,
      Promo: "2020-2023",
      NEtudiant: "...",
      Professeur: "...",
      Tuteur: "...",
      Entreprise: "...",
      Domaine: "...",
      Année: "...",
      CompteRendu: "...",
    },
  ];
  // console.log(dataList);
  let navigation = useNavigate();

  const handleRowClick = (rowData) => {
    // Navigate to "/DelModInternship" with the row data
    navigation("/DelModInternship", { state: { rowData } });
  };

  return (
    <div className="list-container">
      <div className="search-bar">
        {/* Your search bar component goes here */}
        <input type="text" placeholder="Chercher..." />
      </div>
      <Link to="/AddInternship">
        {" "}
        {/* Link to navigate to the AddInternship page */}
        <button className="add-button">+Ajouter</button>
      </Link>

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
          {dataList.map((item) => (
            <tr key={item.id} onClick={() => handleRowClick(item)}>
              <th scope="row">{item.id}</th>
              <td>{item.Promo}</td>
              <td>{item.NEtudiant}</td>
              <td>{item.Professeur}</td>
              <td>{item.Tuteur}</td>
              <td>{item.Entreprise}</td>
              <td>{item.Domaine}</td>
              <td>{item.Année}</td>
              <td>{item.CompteRendu}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;

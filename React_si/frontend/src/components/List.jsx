import React from "react";
import "../styles/style.css";
import { Link } from "react-router-dom";

function List() {
  const handleRowClick = () => {
    navigation.navigate("DelModInternship");
    console.log(`Row is clicked`);
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
            <th scope="col">#</th>
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
          <tr onClick={handleRowClick}>
            <th scope="row">1</th>
            <td>2020-2023</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </tr>
          <tr onClick={handleRowClick}>
            <th scope="row">2</th>
            <td>2020-2023</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </tr>
          <tr onClick={handleRowClick}>
            <th scope="row">3</th>
            <td>2020-2023</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default List;

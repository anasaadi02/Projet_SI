import React, { useEffect, useState } from "react";
import "../styles/style.css";
import { Link, useNavigate } from "react-router-dom";

function List() {

  const [dataList, setDataList] = useState([])

  //hadi hia la fonction likatjib data mn django
  useEffect(() => {
    async function fetchData() {
      console.log(import.meta.env.VITE_API_URL)
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}`)
        if (!response.ok) {
          throw new Error('Network response was not ok!');
        }
        const result = await response.json();
        const dataResponse = await fetch(result.Stages);
        if (!dataResponse.ok) {
          throw new Error('Network response was not ok!');
        }
        const dataResult = await dataResponse.json();
        console.log(dataResult)

        setDataList(dataResult);
      }catch{
        console.error('Error fetching data');
      }
    }
    fetchData();
  }, [])

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
          <tr key={item.nStage} onClick={() => handleRowClick(item)}>
            <th scope="row">{item.nStage}</th>
            <td>{item.promo}</td>
            <td>{item.nEtudiant}</td>
            <td>{item.prof}</td>
            <td>{item.tuteur}</td>
            <td>{item.entreprise}</td>
            <td>{item.tpe}</td>
            <td>{item.annee}</td>
            <td>{item.compte_rendu}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
}

export default List;

import React, { useState } from "react";

const AddInternship = () => {
  const [companyName, setCompanyName] = useState("");
  const [domain, setDomain] = useState("");
  const [supervisorName, setSupervisorName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Company Name:", companyName);
    console.log("Domain:", domain);
    console.log("Supervisor Name:", supervisorName);

    setCompanyName("");
    setDomain("");
    setSupervisorName("");
  };

  return (
    <div className="add">
      <h2 className="add-title">Ajouter les infos de l'entreprise</h2>
      <div className="add1">
        <form onSubmit={handleSubmit}>
          <label className="add-labels">
            nom d'entreprise
            <input
              placeholder="..."
              className="add-inputs"
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </label>
          <br />
          <label className="add-labels">
            domaine:
            <input
              placeholder="..."
              className="add-inputs"
              type="text"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
            />
          </label>
          <br />
          <label className="add-labels">
            l'encadrant
            <input
              placeholder="..."
              className="add-inputs"
              type="text"
              value={supervisorName}
              onChange={(e) => setSupervisorName(e.target.value)}
            />
          </label>
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

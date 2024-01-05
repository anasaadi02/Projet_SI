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
    <div>
      <h2>Add Internship Information</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Company Name:
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Domain:
          <input
            type="text"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
          />
        </label>
        <br />
        <label>
          Supervisor Name:
          <input
            type="text"
            value={supervisorName}
            onChange={(e) => setSupervisorName(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Add Internship</button>
      </form>
    </div>
  );
};

export default AddInternship;

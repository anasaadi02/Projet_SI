import React, { useState, FormEvent } from "react";

const AddInternship: React.FC = () => {
  const [companyName, setCompanyName] = useState<string>("");
  const [domain, setDomain] = useState<string>("");
  const [supervisorName, setSupervisorName] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
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

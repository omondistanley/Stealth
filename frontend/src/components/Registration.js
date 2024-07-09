import React, { useState, useEffect } from "react";
import ReactDOM, { useHistory } from "react-router-dom";
import axios from "axios";

function Registration() {
  const [forms, setForms] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("Registration error");

  const hist = useHistory();

  function handleChange(event) {
    setForms({
      ...forms,
      [event.target.name]: event.target.value,
    });
  }
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const resp = await axios.post(
        "http://localhost:3003/api/register",
        forms,
        hist.push("./Login"),
      );
    } catch (err) {
      setError("Registration error");
    }
  }

  return (
    <div className="Registration">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Enter name here</label>
          <input
            type="text"
            id="name"
            name="name"
            value={forms.name}
            onChange={handleChange}
            aria-required="true"
          />
        </div>
        <div>
          <label htmlFor="email">Enter email here</label>
          <input
            type="text"
            name="email"
            value={forms.email}
            onChange={handleChange}
            aria-required="true"
          />
        </div>
        <div>
          <label htmlFor="password">Enter password here</label>
          <input
            type="text"
            name="password"
            value={forms.password}
            onChange={handleChange}
            aria-required="true"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Registration;

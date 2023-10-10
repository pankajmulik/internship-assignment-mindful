import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(" ");

  const [redirect, setredirect] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(Login);
    console.log(email + " " + password);

    setredirect(true);
  };

  function validate() {}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email"> Email :</label>
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <label htmlFor="password"> Password :</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit" onClick={validate()}>
          submit
        </button>
      </form>
      {redirect === true ? <Navigate push to="/dashboard"></Navigate> : null}
    </div>
  );
};

export default Login;

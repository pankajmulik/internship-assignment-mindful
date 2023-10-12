import React, { useState } from "react";
import { Navigate,Link } from "react-router-dom";
import Signup from "./Signup";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(" ");

  const [redirect, setredirect] = useState(false);
  
  const [state,setState]=useState("login")

  const handleSubmit = (event) => {
    event.preventDefault(Login);
    console.log(email + " " + password);

    setredirect(true);
  };

  function validate() { }
  
 
  return (
    <div>
      <div className="heading">
        <h1>Login </h1>
</div>

      <div className="form-control">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email"> Email :</label>
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
<br/><br/>
        <label htmlFor="password"> Password :</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          />

          <br/><br/>

        <button type="submit" onClick={validate()}>
        Login
          </button>
          

          
      </form>


      </div>
      
      {redirect === true ? <Navigate push to="/dashboard"></Navigate> : null}
    </div>
  );
};

export default Login;

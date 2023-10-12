import React, { useState } from "react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup"

const Home = () => {
const [formAction, setformActon]=useState("login")

  
  
  return (

      <div className="Home">
<div className="form-buttons">
      <button onClick={()=>setformActon("login")}>Login</button>
   <button onClick={()=>setformActon("signup")}>Signup</button>
      
      </div>
      <div>
      {
          formAction === "login" ? <Login /> : "signup" 
          
        
      }
      {
        formAction === "signup" ? <Signup/> : "login"
      }
      
      

      </div>

    </div>
  );
};

export default Home;

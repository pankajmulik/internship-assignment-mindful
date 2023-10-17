import React, { useEffect, useState } from "react";


import { useFormik } from "formik";
import Select from "react-select";
import {Country,State, City} from "country-state-city"


   

const Signup = () => {
  const [Fname, setFname] = useState(" ");
  const [Email, setEmail] = useState(" ");
  const [Phone, setPhone] = useState(" ");
  const [Gender, setGender] = useState(" ");
  const [password, setPassword] = useState(" ");



 

  

  const addressFromik = useFormik({
    initialValues: {
      country: "India",
      state: null,
      city: null
    },
  

onSubmit: (values) => console.log(JSON.stringify(values))
  });

  const countries = Country.getAllCountries();

  const updatedCountries = countries.map((country) => ({
    label: country.name,
    value: country.id,
    ...country
  }));
  const updatedStates = (countryId) =>
   State
      .getStatesOfCountry(countryId)
      .map((state) => ({ label: state.name, value: state.id, ...state }));
  const updatedCities = (stateId) =>
   City
      .getCitiesOfState(stateId)
      .map((city) => ({ label: city.name, value: city.id, ...city }));

  const { values, handleSubmit, setFieldValue, setValues } = addressFromik;

  useEffect(() => {}, [values]);
 
 

  
 
  return (
    <div className="form-control-signup">
      <div className="heading">
        <h1>Signup</h1></div>

      <form>
        <label htmlFor="Name">Name :</label>
        <input
          type="text"
          id="Fname"
          name="Fname"
          value={Fname}
          onChange={(Event) => setFname(Event.target.value)}
        />
        <br />
        <br/>

        <label htmlFor="Email">Email :</label>
        <input
          type="text"
          id="Email"
          name="Email"
          value={Email}
          onChange={(Event) => setEmail(Event.target.value)}
        />
        <br/><br/>

        <label htmlFor="Phone">Phone :</label>
        <input
          type="text"
          id="Fname"
          name="Phone"
          value={Phone}
          onChange={(Event) => setPhone(Event.target.value)}
        />
 <br/><br/>
        <label htmlFor="Password">Password :</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(Event) => setPassword(Event.target.value)}
        />
 <br/><br/>
       
        
       
          
<div>
           <label htmlFor="Name">Gender :</label> <br/>
       
           <input type="radio" value="Male" name="gender" onChange={(Event) => setGender(Event.target.value)}/> Male  <br/>
        <input type="radio" value="Female" name="gender" onChange={(Event) => setGender(Event.target.value)}/> Female   <br/>
        <input type="radio" value="Other" name="gender" onChange={(Event) => setGender(Event.target.value)}/> Other    <br/>
        
 
        </div>

<div className="select-b">
<span>
          <label htmlFor="scountry" >Country :</label>
          
        <Select className="select-c"
          id="country"
          name="country"
          label="country"
          options={updatedCountries}
          value={values.country}

        
         onChange={(value) => {
            setValues({ country: value, state: null, city: null }, false);
          }}
        />
</span>
        <label htmlFor="state">State :</label>

          <Select
            className="select-c"
          id="state"
          name="state"
          options={updatedStates(values.country ? values.country.value : null)}
          value={values.state}
          onChange={(value) => {
            setValues({ state: value, city: null }, false);
          }}
        />
         <label htmlFor="state">City :</label>
          <Select
            className="select-c"
          id="city"
          name="city"
          options={updatedCities(values.state ? values.state.value : null)}
          value={values.city}
          onChange={(value) => setFieldValue("city", value)}
        />
         
        
      
</div>
   
     
       



      </form>
    </div>
  );
};

export default Signup;

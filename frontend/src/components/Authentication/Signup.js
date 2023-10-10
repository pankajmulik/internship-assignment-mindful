import React, { useState } from "react";

const Signup = () => {
  const [Fname, setFname] = useState(" ");
  const [Email, setEmail] = useState(" ");
  const [Phone, setPhone] = useState(" ");
  const [Gender, setGender] = useState(" ");
  const [password, setPassword] = useState(" ");

  return (
    <div>
      <form>
        <label htmlFor="Name">Name :</label>
        <input
          type="text"
          id="Fname"
          name="Fname"
          value={Fname}
          onChange={(Event) => setFname(Event.target.value)}
        />

        <label htmlFor="Email">Email :</label>
        <input
          type="text"
          id="Email"
          name="Email"
          value={Email}
          onChange={(Event) => setEmail(Event.target.value)}
        />

        <label htmlFor="Phone">Phone :</label>
        <input
          type="text"
          id="Fname"
          name="Phone"
          value={Phone}
          onChange={(Event) => setPhone(Event.target.value)}
        />

        <label htmlFor="Password">Password :</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(Event) => setPassword(Event.target.value)}
        />

        <label htmlFor="Name">Gender :</label>
        <select
          value={Gender}
          onChange={(Event) => setGender(Event.target.value)}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </form>
    </div>
  );
};

export default Signup;

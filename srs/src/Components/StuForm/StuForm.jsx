import React from "react";
import './stuform.css'
import { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
const StuForm = () => {
     const navigate = useNavigate();
   const [user, setUser] = useState({
     fname: "",
     lname:"",
     email: "",
    password: "",
    address:"",
    age:"",
    
   
   });
   const handleInputChange = (e) => {
    const { name, value } = e.target;
     
    if (name === "age"){
      if(value >= 18){
        setUser({...user,[name]: value});
      }
    } else{
      setUser({ ...user, [name]: value});
    }
   };
   

   const handleSubmit = (e) => {
    e.preventDefault(); 
    const{
      fname,
      lname,
      email,
      password,
      address,
      age,
    }= user;
    
    axios.post('http://localhost:3001/StuForm',{fname,lname,email,
    password,address,age})
   .then(result => {console.log(result)
 navigate('/Login')} )
  .catch(err=>console.log(err))
  };

 

  return (
    <section className="stuform">
      <h1>STUDENT REGISTRATION</h1>
      <form onSubmit={handleSubmit}>
        <div className="formDiv">
          <label htmlFor="FirstName">First Name</label>
          <input
            required
            type="text"
            placeholder="First Name"
            onChange={(e) => {
              e.preventDefault();
              setUser({ ...user, fname: e.target.value });
            }}
          />
        </div>

        <div className="formDiv">
          <label htmlFor="LastName">Last Name</label>
          <input
            required
            type="text"
            placeholder="Last Name"
            onChange={(e) => {
              e.preventDefault();
              setUser({ ...user, lname: e.target.value });
            }}
          />
        </div>

        <div className="formDiv">
          <label htmlFor="Email">Email</label>
          <input
            required
            type="email"
            placeholder="Email"
            onChange={(e) => {
              e.preventDefault();
              setUser({ ...user, email: e.target.value });
            }}
          />
        </div>

        <div className="formDiv">
          <label htmlFor="Password">Password</label>
          <input
            required
            type="password"
            placeholder="password"
            onChange={(e) => {
              e.preventDefault();
              setUser({ ...user, password: e.target.value });
            }}
          />
        </div>

        <div className="formDiv">
          <label htmlFor="Address">Address</label>
          <input
            required
            type="text"
            placeholder="Address"
            onChange={(e) => {
              e.preventDefault();
              setUser({ ...user, address: e.target.value });
            }}
          />
        </div>

        <div className="formDiv">
          <label htmlFor="Age">Age</label>
          <input
            required
            type="number"
            placeholder="Age"
            name="age"
            onChange={handleInputChange}
            max={18}
          />
        </div>

        <button type="submit" className="btn-up">
          
            REGISTERED
         
        </button>
      </form>
    </section>
  );
};

export default StuForm;

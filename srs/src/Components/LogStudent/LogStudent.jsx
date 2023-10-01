import React, { useState } from "react";
import './logstudent.css'
import axios from "axios";

import { NavLink, useNavigate } from "react-router-dom";
const LogStudent = () => {
  const navigate = useNavigate()
  
  const [user, setUser] = useState({
    email:"",
    password:"",
  });
  //const handleSubmit = (e) => {
   // e.preventDefault();
   // const {
      //email,
      //password,
   // } = user;
    //axios.post("http://localhost:3003/", { email, password })
      //.then((result) => {
        //console.log(result);
        //if (result.data === "success") 
         // navigate("/Login");
        
     // })

     // .catch((err) => console.log(err));
//};
  return (
    <div className="log">
      <div className="box-container">
        <section className="log-stu">
          <h1> Log As Student</h1>
          <form >
            <div className="loginDiv">
              <label htmlFor="email">Email</label>
              <input
                required
                type="email"
                placeholder="email"
                value={user.email}
                onChange={(e) => {
                  e.preventDefault();
                  setUser({ ...user, email: e.target.value });
                }}
              />
            </div>
            <div className="loginDiv">
              <label htmlFor="password">Password</label>
              <input
                required
                type="password"
                placeholder="password"
                value={user.password}
                onChange={(e) => {
                  e.preventDefault();
                  setUser({ ...user, password: e.target.value });
                }}
              />
            </div>
            <div className="btn-container">
              <button type="submit" className="btn-stu">
                <NavLink
                  className={"btn"}
                  to={"/Login"}
                  style={{
                    color: "white",
                  }}
                >
                  SignIn
                </NavLink>
              
              </button>
            </div>
          </form>
          <NavLink className={"btn"} to={"/StuForm"}>
            Create Account
          </NavLink>
          <button type="submit" className="btn-stu">
            <NavLink
              className={"btn"}
              to={"/Teacher"}
              style={{
                color: "white",
              }}
            >
              LOG AS TEACHER
            </NavLink>
          </button>
        </section>
      </div>
    </div>
  );
};

export default LogStudent;

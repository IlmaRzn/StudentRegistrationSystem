import React, { useState } from "react";
import './teacher.css'

import { useNavigate } from "react-router-dom";
const Teacher = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email:"",
    password:"",
  });
  const [error, setError]= useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const Email = "admin1@gmail.com";
    const Password = "admin123";
    if(user.email === Email && user.password === Password ){
       navigate('/LogTeacher');
    }else{
      setError("invalid email or password");
    }
  };
  return (
    <div className="log">
      <div className="box-container">
        <section className="log-stu">
          <h1> Log As Teacher</h1>
          <form onSubmit={handleSubmit}>
            <div className="loginDiv">
              <label htmlFor="email">Email</label>
              <input
                required
                type="email"
                placeholder="email"
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
                onChange={(e) => {
                  e.preventDefault();
                  setUser({ ...user, password: e.target.value });
                }}
              />
            </div>

            <button type="submit" className="btn-tea">
                LOGIN
              </button>
          </form>
          {error && <p className="error-message">{error}</p>}
        </section>
      </div>
    </div>
  );
};

export default Teacher;

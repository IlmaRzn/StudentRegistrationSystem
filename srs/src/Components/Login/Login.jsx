import React,{ useState, useEffect } from "react";
import './login.css';
import { NavLink } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [Students,setStudents] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3003/getStudent')
    .then(Students => setStudents (Students.data) )
    .catch(err => console.log(err))
  },[]);
  


  return (
    <div className="stu-list">
      <h2>STUDENT LIST</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {Students.map((Student) => (
             <tr key={Student.studentID}>
              <td>{Student.firstName}</td>
              <td>{Student.lastName}</td>
              <td>{Student.email}</td>
              <td>{Student.age}</td>
              <td>{Student.address}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
      <button type="submit" className="btn-log">
        <NavLink
          className={"btn"}
          to={"/Student"}
          style={{
            color: "white",
            textDecoration:"none",
            padding:"8px 16px",
          }}
        >
          Add
        </NavLink>
      </button>
    </div>
  );
};
export default Login;

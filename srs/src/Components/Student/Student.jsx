import React from "react";
import './student.css'
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Student = () => {
   const navigate = useNavigate();

   const [user, setUser] = useState({
     firstname: "",
     lastname: "",
     email: "",
     password: "",
     address: "",
     age: "",
     profilePic: "",
     sub1: "",
       sub2: "",
       sub3: "",
       sub4: "",
       sub5: "",
       sub6: "",
       sub7: "",
       sub8: "",
       sub9: "",
     
   });
   
   const handleInputChange = (e) => {
     const { name, value } = e.target;
     if (name === "age") {
       if (value > 18) {
         setUser({ ...user, [name]: value });
       }
     } else {
       setUser({ ...user, [name]: value });
     }
    setUser({...user,[name]: value });
  
   };
   const handleFileChange = (e) => {
     const file = e.target.files[0];
     setUser({...user, profile: file} );
   };
   const handleUpload = (e) =>{
    const formdata = new FormData()
    formdata.append('file', user.profilePic);
    axios.post('http://localhoast:3003/upload', formdata )
    .then(res => console.log(res))
    .catch(err => console.log(err))
   }

   const handleSubmit = async (e) => {
     e.preventDefault();
     const {
       firstname,
       lastname,
       email,
       password,
       address,
       age,
       profilePic,
       sub1,
       sub2,
       sub3,
       sub4,
       sub5,
       sub6,
       sub7,
       sub8,
       sub9,
     } = user;

     axios.post('http://localhost:3001/Student',
     {firstname,lastname,email,password,address,age,
      profilePic,sub1,sub2,sub3,sub4,sub5,sub6,sub7,sub8,sub9})
     .then(result => {console.log(result)
      navigate('/Login')})
     .catch (err=>console.log(err))

   };

   

  return (
    <section className="proform">
      <h1>STUDENT PROFILE</h1>
      <form
        
        onSubmit={handleSubmit}
      >
        <div className="formingDiv">
          <label htmlFor="FirstName">First Name</label>
          <input
            required
            type="text"
            placeholder="First Name"
            name="firstname"
            value={user.firstname}
            onChange={handleInputChange}
          />
        </div>

        <div className="formingDiv">
          <label htmlFor="LastName">Last Name</label>
          <input
            required
            type="text"
            placeholder="Last Name"
            name="lastname"
            value={user.lastname}
            onChange={handleInputChange}
          />
        </div>

        <div className="formingDiv">
          <label htmlFor="Email">Email</label>
          <input
            required
            type="email"
            placeholder="Email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="formingDiv">
          <label htmlFor="Password">Password</label>
          <input
            required
            type="password"
            placeholder="password"
            name="password"
            value={user.password}
            onChange={handleInputChange}
          />
        </div>

        <div className="formingDiv">
          <label htmlFor="Address">Address</label>
          <input
            required
            type="text"
            placeholder="Address"
            name="address"
            value={user.address}
            onChange={handleInputChange}
          />
        </div>

        <div className="formingDiv">
          <label htmlFor="Age">Age</label>
          <input
            required
            type="number"
            placeholder="Age"
            name="age"
            value={user.age}
            onChange={handleInputChange}
            min={18}
          />
        </div>

        <div className="formingDiv">
          <label htmlFor="Profile">Profile Picture</label>
          <input
            required
            type="file"
            placeholder="Profile Picture"
            accept="image/*"
            onChange={handleFileChange}
          />
          <button onClick={handleUpload}>Upload</button>
        </div>
        <div className="formingDiv">
          <label htmlFor="sub1">sub1</label>
          <input
            required
            type="number"
            placeholder="sub1"
            name="sub1"
            value={user.sub1}
            onChange={handleInputChange}
          />
        </div>
        <div className="formingDiv">
          <label htmlFor="sub2">sub2</label>
          <input
            required
            type="number"
            placeholder="sub2"
            name="sub2"
            value={user.sub2}
            onChange={handleInputChange}
          />
        </div>
        <div className="formingDiv">
          <label htmlFor="sub3">sub3</label>
          <input
            required
            type="number"
            placeholder="sub3"
            name="sub3"
            value={user.sub3}
            onChange={handleInputChange}
          />
        </div>
        <div className="formingDiv">
          <label htmlFor="sub4">sub4</label>
          <input
            required
            type="number"
            placeholder="sub4"
            name="sub4"
            value={user.sub4}
            onChange={handleInputChange}
          />
        </div>
        <div className="formingDiv">
          <label htmlFor="sub5">sub5</label>
          <input
            required
            type="number"
            placeholder="sub5"
            name="sub5"
            value={user.sub5}
            onChange={handleInputChange}
          />
        </div>
        <div className="formingDiv">
          <label htmlFor="sub6">sub6</label>
          <input
            required
            type="number"
            placeholder="sub6"
            name="sub6"
            value={user.sub6}
            onChange={handleInputChange}
          />
        </div>
        <div className="formingDiv">
          <label htmlFor="sub7">sub7</label>
          <input
            required
            type="number"
            placeholder="sub7"
            name="sub7"
            value={user.sub7}
            onChange={handleInputChange}
          />
        </div>
        <div className="formingDiv">
          <label htmlFor="sub8">sub8</label>
          <input
            required
            type="number"
            placeholder="sub8"
            name="sub8"
            value={user.sub8}
            onChange={handleInputChange}
          />
        </div>
        <div className="formingDiv">
          <label htmlFor="sub9">sub9</label>
          <input
            required
            type="number"
            placeholder="sub9"
            name="sub9"
            value={user.sub9}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit" className="btn-sub">
          Update
        </button>
      </form>
    </section>
  );
};

export default Student;

import React, { useState, useEffect} from "react";
import './logteacher.css'
import axios from "axios";



const LogTeacher = () => {
 const [StudentList,setStudentList ] = useState([]);
 const [editingStudent, setEditingStudent] = useState(null);
    useEffect(() => {
      axios.get('http://localhost:3003/getStudentList')
      .then(Students => setStudentList(Students.data))
      .catch(err => console.log(err))
    },[]);
    const handleUpdate = (email) => {
      const updatedStudent = StudentList.find(
        (student) => student.email === email
      );
      setEditingStudent(updatedStudent);
    };

    const handleSave = () => {
      
      axios
        .put(
          `http://localhost:3003/updateStudent/${editingStudent.email}`,
          editingStudent
        )
        .then((response) => {
          if (response.status === 200) {
            
            setEditingStudent(null);
            setStudentList((prevList) =>
              prevList.map((student) =>
                student.email === editingStudent.email
                  ? editingStudent
                  : student
              )
            );
          }
        })
        .catch((err) => console.log(err));
    };
    const handleDelete = (email) => {
      axios
        .delete(`http://localhost:3003/deleteStudent/${email}`)
        .then((response) => {
          if (response.status === 200) {
            
            setStudentList((prevList) =>
              prevList.filter((student) => student.email !== email)
            );
          }
        })
        .catch((err) => console.log(err));
    };
  return (
    <div className="tea-dashboard">
      <h2>TEACHER DASHBOARD</h2>
      <div className="list">
        <h3>Student List</h3>

        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>age</th>
              <th>sub1</th>
              <th>sub2</th>
              <th>sub3</th>
              <th>sub4</th>
              <th>sub5</th>
              <th>sub6</th>
              <th>sub7</th>
              <th>sub8</th>
              <th>sub9</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {StudentList.map((Student) => (
              <tr key={Student.email}>
                <td>{Student.age}</td>
                <td>{Student.lastname}</td>
                <td>{Student.email}</td>
                <td>{Student.age}</td>
                <td>{Student.sub1}</td>
                <td>{Student.sub2}</td>
                <td>{Student.sub3}</td>
                <td>{Student.sub4}</td>
                <td>{Student.sub5}</td>
                <td>{Student.sub6}</td>
                <td>{Student.sub7}</td>
                <td>{Student.sub8}</td>
                <td>{Student.sub9}</td>
                <button onClick={() => handleUpdate(Student.email)}>
                  Update
                </button>
                <button onClick={() => handleDelete(Student.email)}>
                  Delete
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {editingStudent && (
        <div className="edit-form">
          <h3>Edit Student Details</h3>
          <input
            type="text"
            placeholder="firstname"
            value={editingStudent.firstname}
            onChange={(e) =>
              setEditingStudent({
                ...editingStudent,
                firstname: e.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="lastname"
            value={editingStudent.lastname}
            onChange={(e) =>
              setEditingStudent({
                ...editingStudent,
                lastname: e.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="email"
            value={editingStudent.email}
            onChange={(e) =>
              setEditingStudent({
                ...editingStudent,
                email: e.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="age"
            value={editingStudent.age}
            onChange={(e) =>
              setEditingStudent({
                ...editingStudent,
                age: e.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="sub1"
            value={editingStudent.sub1}
            onChange={(e) =>
              setEditingStudent({
                ...editingStudent,
                sub1: e.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="sub2"
            value={editingStudent.sub2}
            onChange={(e) =>
              setEditingStudent({
                ...editingStudent,
                sub2: e.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="sub3"
            value={editingStudent.sub3}
            onChange={(e) =>
              setEditingStudent({
                ...editingStudent,
                sub3: e.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="sub4"
            value={editingStudent.sub4}
            onChange={(e) =>
              setEditingStudent({
                ...editingStudent,
                sub4: e.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="sub5"
            value={editingStudent.sub5}
            onChange={(e) =>
              setEditingStudent({
                ...editingStudent,
                sub5: e.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="sub6"
            value={editingStudent.sub6}
            onChange={(e) =>
              setEditingStudent({
                ...editingStudent,
                sub6: e.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="sub7"
            value={editingStudent.sub7}
            onChange={(e) =>
              setEditingStudent({
                ...editingStudent,
                sub7: e.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="sub8"
            value={editingStudent.sub8}
            onChange={(e) =>
              setEditingStudent({
                ...editingStudent,
                sub8: e.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="sub9"
            value={editingStudent.sub9}
            onChange={(e) =>
              setEditingStudent({
                ...editingStudent,
                sub9: e.target.value,
              })
            }
          />

          <button onClick={handleSave}>Save</button>
          <button onClick={() => setEditingStudent(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default LogTeacher;

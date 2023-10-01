import React from "react";
import './app.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Loginpage from "./Pages/Login";
import LogStudentPage from "./Pages/LogStudent";
import LogTeacherpage from "./Pages/LogTeacher";
import Studentpage from "./Pages/Student";
import Teacherpage from "./Pages/Teacher";
import StuFormpage from "./Pages/StuForm";


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/LogTeacher" Component={() => LogTeacherpage()} />

          <Route path="/Student" Component={() => Studentpage()} />
          <Route path="/Teacher" Component={() => Teacherpage()} />
          <Route path="/StuForm" Component={() => StuFormpage()} />
          <Route path="/Login" Component={() => Loginpage()} />
          <Route path="/" Component={() => LogStudentPage()} />
          
          
        </Routes>
      </Router>
    </>
  );
};

export default App;

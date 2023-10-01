const express = require ("express")
const mongoose = require('mongoose')
const cors = require ("cors")
const multer = require('multer')
const studentModel = require('./models/student')
const stuFormModel = require('./models/stuform')
 const app = express()
 app.use(express.json())
 app.use(cors())

 const storage = multer.diskStorage({
   destination: (req, file, cb)=>{
      cb(null, 'ImgFile/Images')
   },
   filename: (req, file, cb) =>{
      cb(null, file.fieldname )
   }
 })
  const upload = multer({
   storage: storage
  })

  app.post("/upload", upload.single("file"), (req, res) => {
    studentModel
      .create({ profilePic: req.file.filename })
      .then((result) => res.json(result))
      .catch((err) => console.log(err));
  });
 mongoose.connect("mongodb://127.0.0.1:27017/student");


/*app.post("/Login",(req,res)=>{
   const {email, password}= req.body;
   studentModel.findOne({email: email})
   .then(user => {
      if(user){
         if(user.password === password){
            res.json("success")
         }else{
            res.json("password in correct")
         }
      } else{
         res.json("no such student")
      }
   })
})*/
 app.post('/Student',(req, res)=>{
      studentModel.create(req.body)
      .then(student =>res.json(student))
      .catch(err=> res.json(err))
 })
 app.get("/getStudent", (req, res) => {
   studentModel.find()
     .then((students) => res.json(students))
     .catch((err) => res.json(err));
 });
 app.get("/getStudentList",(req, res) =>{
   studentModel.find()
   .then((students) => res.json(students))
   .catch((err) => res.json(err));
 });
 app.delete("/deleteStudent/:email", (req, res) => {
   const email = req.params.email;

   studentModel
     .findOneAndDelete({ email: email })
     .then((deletedStudent) => {
       if (deletedStudent) {
         res.json({ success: true, message: "Student deleted successfully" });
       } else {
         res.json({ success: false, message: "Student not found" });
       }
     })
     .catch((err) => {
       res.json({ success: false, message: err.message });
     });
 });
 app.put("/updateStudent/:email", (req, res) => {
   const email = req.params.email;
   const updatedStudent = req.body;

   studentModel
     .findOneAndUpdate({ email: email }, updatedStudent, { new: true })
     .then((updatedStudent) => {
       res.json(updatedStudent);
     })
     .catch((err) => {
       res.status(500).json({ error: err.message });
     });
 });
 app.post('/StuForm',(req, res)=>{
    stuFormModel.create(req.body)
    .then(stuform => res.json(stuform))
    .catch(err=> res.json(err))
 })
 app.listen(3003,()=> {
    console.log("server is connected")
 })
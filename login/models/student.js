const mongoose = require ('mongoose')
const studentSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^[a-zA-Z\s]+$/.test(v);
      },
      message: (props) => `${props.value}is not a valid fname`,
    },
  },
  lastname: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^[a-zA-Z\s]+$/.test(v);
      },
      message: (props) => `${props.value}is not a valid lname`,
    },
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: (props) => `${props.value}is not a valid email`,
    },
  },
  age: {
    type: Number,
    validate: {
      validator: function (v) {
        return v > 18;
      },
      message: (props) => `${props.value} is not a valid age!`,
    },
  },
  address: {
    type: String,
    unique: true,
  },
  profilePic: String,
  sub1: Number,
  sub2: Number,
  sub3: Number,
  sub4: Number,
  sub5: Number,
  sub6: Number,
  sub7: Number,
  sub8: Number,
  sub9: Number,
});
const studentModel = mongoose.model("student",studentSchema)
module.exports = studentModel;
var express = require("express");
var router = express.Router();
const { Campus, Student } = require("../database/models");



//GET ALL STUDENTS
router.get("/", async (req, res, next) =>{
try{
    const student  = await Student.findAll({include:Campus});

    res.status(200).json(student);
}
    catch(err){
        next(err);
    }
});


//GET A STUDENT BASED ON ID
router.get("/:id", async (req, res, next) => {
    // take the id from params
    const { id } = req.params;
    // query the database for a campus with matching id
    try {
      // if successful:
      const student = await Student.findByPk(id,{include:Campus});
 

      // send back the campus as a response
      res.status(200).json([student]);
    } catch (err) {
      // if error:
      // handle error
      next(err);
    }
  });



//ADD A STUDENT 
  router.post("/:id", async (req, res, next) => {
    // Take the form data from the request body
    const { id } = req.params;
    const { firstName, lastName, email, gpa, imageUrl } = req.body;
    // Create a campus object
    const studentObj = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      gpa: gpa,
      imageUrl: imageUrl,
      campusId: id,
    };
    try {
      // Create a new campus on the database
      const newStudent = await Student.create(studentObj);
      // The database would return a campus
      // send that campus as a json to the client
      res.status(201).send(newStudent);
    } catch (err) {
      console.log("POST STUDENT ERROR")
      next(err);
    }
  });


module.exports = router;
var express = require("express");
var router = express.Router();
const { Campus, Student } = require("../database/models");

router.get("/", async (req, res, next) =>{
    console.log("STUDENT ROUTER CALLED")
try{
    const student  = await Student.findAll({include:Campus});

    res.status(200).json(student);
}
    catch(err){
        next(err);
    }
});



// Route to handle adding a campus
// /api/campuses/
// router.post("/allstudents", async (req, res, next) => {
//     // Take the form data from the request body
//     const { firstName } = req.body;
//     // Create a campus object
//     const studentObj = {
//       firstName: firstName,
//     };
//     try {
//       // Create a new campus on the database
//       const newStudent = await Student.create(studentObj);
//       // The database would return a campus
//       // send that campus as a json to the client
//       res.status(201).send(newStudent);
//     } catch (err) {
//       next(err);
//     }
//   });

module.exports = router;
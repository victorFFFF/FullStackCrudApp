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




module.exports = router;
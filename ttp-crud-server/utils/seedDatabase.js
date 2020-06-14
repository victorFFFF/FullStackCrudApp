const { Campus, Student } = require("../database/models");

const seedDatabase = async () => {
  await Promise.all([
    Campus.create({
      name: "Brooklyn College",
      address: "Brooklyn",
      description: "A college in Brooklyn",
      imageUrl : "https://mastersreview.com/files/2013/09/brooklyn-College-logo.jpg",
    }),
    Campus.create({
      name: "College of Staten Island",
      address: "Staten Island",
      description: "A college on Staten Island",
      imageUrl : "https://media-exp1.licdn.com/dms/image/C4E0BAQGWsEebXWV2DQ/company-logo_200_200/0?e=2159024400&v=beta&t=aloLNNvJUANyLh9P6igxrB2ssdyHKcnI9J2E_FGLtn4",

    }),
    Campus.create({
      name: "John Jay College",
      address: "Manhattan",
      description: "A college in Manhattan",
      imageUrl: "https://images.youracclaim.com/images/ddf15e7e-6c22-423d-be46-232bfe337603/blob.png",
    }),
    Student.create({ firstName: "Daniel", lastName: "Wong", email:"thEmail",gpa : 1.2, campusId:2 }),
    Student.create({ firstName: "Sally", lastName:"Li",email:"theEmail", gpa : 3.0, campusId: 1 }),
    Student.create({ firstName: "Victor", lastName:"chen",email:"theEmail",gpa : 2.3, campusId: 1 }),
  ]);
};

module.exports = seedDatabase;

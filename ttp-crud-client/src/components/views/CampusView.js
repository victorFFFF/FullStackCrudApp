import React from "react";
import { Link } from "react-router-dom";

const CampusView = (props) => {
  let studentDisplay;
  if (props.campus.students) {
    studentDisplay = (
      <div>
        <p>{props.campus.students.length} Students</p>
        {props.campus.students.map((student) => (

          <div key={student.id}>
           <Link to={`/students/${student.id}`}> {student.firstName}</Link>
          </div>
                 
        ))}
      </div>
    );
  } else {
    studentDisplay = <p>There are no students enrolled</p>;
  }


  return (
    <div style={{border: '2px solid black' }}>
      
      <img src={props.campus.imageUrl} alt={props.campus.name} />
      <h1>{props.campus.name}</h1>
      <h3>{props.campus.address}</h3>
      <p>{props.campus.description}</p>
      {studentDisplay}
          <Link to={`/students/${props.campus.id}/new`}>
      <button>Add Student</button></Link>
      <Link to={`/campuses/${props.campus.id}/edit`}>
            <button>Edit</button> </Link>
      <Link to={'/campuses'}>      
          <button onClick={() => props.handleDelete(props.campus.id)}>Delete</button> </Link>
    </div>
  );
};

export default CampusView;

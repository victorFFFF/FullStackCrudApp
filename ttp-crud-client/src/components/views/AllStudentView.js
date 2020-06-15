import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const AllStudentView = (props) => {
  if (!props.allStudent.length) {
    return <div>There are no students enrolled.</div>;
  }

console.log("STUDENT VIEW ")


  return (
    <div>
      <h1>All Students</h1>
    
      <Link to={`/students/${props.allStudent.id}/new`}>
      <button style={{marginBottom: '300px' }}>Add Student</button></Link>

      {/* <h2>{props.allStudent}X</h2> */}
      {props.allStudent.map((x) => (
        <div key={x.id}>
          <div style={{border: '2px solid black' }}>
            <img src={x.imageUrl} width='300px'></img>
            <br></br>
            <Link to={`/students/${x.id}`}>{x.firstName}</Link>
            <br></br>
            <Link to={`/campuses/${x.campus.id}`}>{x.campus.name}</Link>
            {/* <p>{x.campus.name}</p> */}
            <button onClick={() => props.handleDelete(x.id)}>Delete</button>
            
            </div>
    

        </div>
      ))}
    </div>
  );
};

AllStudentView.propTypes = {
  allStudent: PropTypes.array.isRequired,
};

export default AllStudentView;

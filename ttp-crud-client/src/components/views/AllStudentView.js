import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const AllStudentView = (props) => {
//   if (!props.allCampuses.length) {
//     return <div className="all-campuses">There are no campuses</div>;
//   }

console.log("STUDENT VIEW ")


  return (
    <div>
      <h1>All Students</h1>
      {/* <h2>{props.allStudent}X</h2> */}
      {props.allStudent.map((x) => (
        <div key={x.id}>
          <div style={{border: '2px solid black' }}>
            <img src={x.imageUrl} width='300px'></img>
            <br></br>
            <Link >{x.firstName}</Link>
            <br></br>
            <Link to={`/campuses/${x.campus.id}`}>{x.campus.name}</Link>
            {/* <p>{x.campus.name}</p> */}
            
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

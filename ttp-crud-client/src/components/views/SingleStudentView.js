import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const SingleStudentView = (props) => {
//   if (!props.allStudent.length) {
//     return <div>There are no students enrolled.</div>;
//   }

console.log("SINGLE STUDENT VIEW ")


  return (
    <div style={{border: '2px solid black' }}>


     {props.allStudent.map((x) => (
        <div key={x.id}>
          <div style={{border: '2px solid black' }}>
          <img src={x.campus.imageUrl}></img>
             <p>{x.firstName}, {x.lastName}</p>
            <Link to={`/campuses/${x.campus.id}`}>{x.campus.name}</Link>
            <p>GPA {x.gpa} </p>
            <p>{x.email}</p>
            
            </div>
        </div>
      ))}

    </div>
  );
};

// SingleStudentView.propTypes = {
//     allStudent: PropTypes.array.isRequired,
// };

export default SingleStudentView;

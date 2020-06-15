import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom'

const EditStudentFormView = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>
          First Name:{" "}
          <input
            value={props.firstName}
            name="firstName"
            onChange={props.handleChange}
          ></input>
        </div>
        <div>
          Last Name:{" "}
          <input
            value={props.lastName}
            name="lastName"
            onChange={props.handleChange}
          ></input>
        </div>
        <div>
          email:{" "}
          <input
            value={props.email}
            name="email"
            onChange={props.handleChange}
          ></input>
        </div>
        <div>
          Image Url:{" "}
          <input
            value={props.imageUrl}
            name="imageUrl"
            onChange={props.handleChange}
          ></input>
        </div>
        <div>
          School ID:{" "}
          <input
            value={props.campusId}
            name="campusId"
            onChange={props.handleChange}
          ></input>
        </div>
    
        <button>Confirm</button>
      </form>
     
    </div>
  );
};

// EditStudentFormView.propTypes = {
//   handleSubmit: PropTypes.func.isRequired,
//   handleChange: PropTypes.func.isRequired,
//   name: PropTypes.string.isRequired,
//   address: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   imageUrl: PropTypes.string.isRequired,
// };

export default EditStudentFormView;

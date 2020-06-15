import React from "react";
import PropTypes from "prop-types";

const AddStudentFormView = (props) => {
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
          GPA:{" "}
          <input
            value={props.gpa}
            name="gpa"
            onChange={props.handleChange}
           
          ></input>
        </div>
        <div>
          Photo:{" "}
          <input
            value={props.imageUrl}
            name="imageUrl"
            onChange={props.handleChange}
            
          ></input>
        </div>
        <button>Add Student</button>
      </form>
    </div>
  );
};

AddStudentFormView.propTypes = {
  // handleSubmit: PropTypes.func.isRequired,
  // handleChange: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email:PropTypes.string.isRequired,
  gpa: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default AddStudentFormView;

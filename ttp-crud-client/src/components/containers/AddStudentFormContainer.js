import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { AddStudentFormView } from "../views";
import { addStudentThunk } from "../../thunks";

class AddStudentFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      gpa: "",
      imageUrl: "",
      theId:"",
      isValidName: false,
      errors: {},
    };
  }

  handleChange = (e) => {
    if (e.target.name === "name") {
      this.setState({ firstName: e.target.value });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };

  // validateName = () => {
  //   const { name } = this.state;
  //   let errors = { ...this.state.errors };
  //   // set a valid boolean to true
  //   let isValidName = true;
  //   // check if the value is valid
  //   if (name.length < 2) {
  //     // if not, set the value to false and add error message
  //     isValidName = false;
  //     errors.name = "Invalid campus name";
  //   }
  //   //
  //   // setstate with isValidName
  //   if (isValidName) {
  //     errors.name = "valid name";
  //   }
  //   this.setState({ isValidName, errors });
  // };

  handleSubmit = (e) => {
    console.log("BEFORE FAULT")
    e.preventDefault();
    console.log("AFTER FAULT")
    this.props.addStudent(this.state);
  };

  render() {
    console.log("THE firstName - " + this.state.firstName)
    console.log("THE lastName - " + this.state.lastName)
    console.log("THE gpa - " + this.state.gpa)
    console.log("THE email - " + this.state.email)
    console.log("THE url - " + this.state.imageUrl)
    return (
      <>
        {/* Can potentially be extracted into its own ErrorMessage component */}
        <h1>ADD STUDENT FORM</h1>
        {this.state.isValidName ? "" : this.state.errors.name}
        <AddStudentFormView 
         firstName={this.state.firstName}
         lastName={this.state.lastName}
         email={this.state.email}
         gpa={this.state.gpa}
         imageUrl={this.state.imageUrl}
         theId={this.state.theId}
         handleSubmit={this.handleSubmit}
         handleChange={this.handleChange}/>


        {/* <AddStudentFormView
          name={this.state.name}
          address={this.state.address}
          description={this.state.description}
          imageUrl={this.state.imageUrl}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        /> */}
      </>
    );
  }
}


const mapDispatch = (dispatch) => {
  console.log("AddStudentContainer DISPATCHING")
  return {
    addStudent: (student) => dispatch(addStudentThunk(student)),
  };
};

AddStudentFormContainer.propTypes = {
  addStudent: PropTypes.func.isRequired,
};

export default connect(null, mapDispatch)(AddStudentFormContainer);

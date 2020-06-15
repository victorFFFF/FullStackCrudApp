import React, { Component } from "react";
import PropTypes from "prop-types";
import { fetchChosenStudentThunk, editStudentThunk } from "../../thunks";
import { connect } from "react-redux";
import { EditStudentFormView } from "../views";

class EditStudentFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        firstName: "",
        lastName: "",
        email: "",
        gpa: "",
        imageUrl: "",
        campusId:"",
    };
  }

  componentDidMount() {
   
    this.props.fetchStudent(this.props.match.params.id).then(({ payload }) => {
      this.setState(payload[0]);
    });
 

  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    this.props.editStudent(id, this.state);
  };

  render() {
      console.log("RENDER STATE " + this.state.firstName)
    return (
      <EditStudentFormView
        firstName={this.state.firstName}
        lastName={this.state.lastName}
        email={this.state.email}
        gpa={this.state.gpa}
        imageUrl={this.state.imageUrl}
        campusId={this.state.campusId}
        id = { this.props.student}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    );
  }
}

const mapState = (state) => {
  return { student: state.student };
};

const mapDispatch = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchChosenStudentThunk(id)),
    editStudent: (id, student) => dispatch(editStudentThunk(id, student)),
  };
};

fetchChosenStudentThunk.propTypes = {
    fetchStudent: PropTypes.func.isRequired,
    editStudent: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(EditStudentFormContainer);

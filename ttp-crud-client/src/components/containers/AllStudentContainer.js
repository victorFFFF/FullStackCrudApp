import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllStudentsThunk,deleteStudentThunk } from "../../thunks";
import { AllStudentView } from "../views";
import { Link } from "react-router-dom";

// Smart container;
class AllStudentContainer extends Component {
  componentDidMount() {
    console.log("ALLSTUDENT MOUNTING");
    this.props.fetchAllStudent();
  }

  handleDelete = (id) => {
    this.props.deleteStudent(id);
  };

  render() {
    console.log("ALLSTUDENT RENDER");
    return (
      <div>  
        {/* <Link to={"/students/new"} >
      <button>Add Student</button> </Link> */}
      
      <AllStudentView allStudent={this.props.allStudent}
                        handleDelete={this.handleDelete}/>
      </div>
        // allCampuses={this.props.allCampuses}
        // hello={this.props.hello}
        // handleDelete={this.handleDelete}
    //   />
    );
  }
}

// Map state to props;
const mapState = (state) => {
  console.log("STUDENT MAPSTATE")
  return {
    hello: "hello world!!!",
    allStudent: state.allStudent,
  };
};




// Map dispatch to props;
const mapDispatch = (dispatch) => {
  console.log(" STUDENT MAPDISPATCH ")
  return {
    fetchAllStudent: () => dispatch( fetchAllStudentsThunk() ),
    deleteStudent: (id) => dispatch( deleteStudentThunk(id) ),
  };
};

// Type check props;
// AllStudentContainer.propTypes = {
//   allStudent: PropTypes.array.isRequired,
//   fetchAllStudent: PropTypes.func.isRequired,
// };

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AllStudentContainer);

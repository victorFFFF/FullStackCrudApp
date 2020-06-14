import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllStudentsThunk } from "../../thunks";
import { AllStudentView } from "../views";

// Smart container;
class AllStudentContainer extends Component {
  componentDidMount() {
    console.log("ALLSTUDENT MOUNTING");
    this.props.fetchAllStudent();
  }

  // handleDelete = (id) => {
  //   this.props.deleteCampus(id);
  // };

  render() {
    console.log("ALLSTUDENT RENDER");
    return (
      
      <AllStudentView allStudent={this.props.allStudent}/>
     
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
    fetchAllStudent: () => dispatch(fetchAllStudentsThunk()),
  };
};

// Type check props;
// AllStudentContainer.propTypes = {
//   allStudent: PropTypes.array.isRequired,
//   fetchAllStudent: PropTypes.func.isRequired,
// };

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AllStudentContainer);

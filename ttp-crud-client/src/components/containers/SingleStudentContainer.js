import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchChosenStudentThunk } from "../../thunks";
import { SingleStudentView } from "../views";

// Smart container;
class SingleStudentContainer extends Component {
  componentDidMount() {
    console.log("SINGLE STUDENT MOUNTING");
    this.props.fetchChosenStudent(this.props.match.params.id);
  }


  render() {
    console.log("SINGLE STUDENT RENDER");
    return (
      <div>
      <SingleStudentView allStudent={this.props.allStudent}/>
    </div>
     
    );
  }
}

// Map state to props;
const mapState = (state) => {
  console.log("SingleSTUDENT MAPSTATE")
  return {
    hello: "hello world!!!",
    allStudent: state.allStudent,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  console.log("Single STUDENT MAPDISPATCH ")
  return {
    fetchChosenStudent: (id) => dispatch(fetchChosenStudentThunk(id)),
  };
};


// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(SingleStudentContainer);

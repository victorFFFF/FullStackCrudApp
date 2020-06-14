import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCampusThunk } from "../../thunks";

import { CampusView } from "../views";

class CampusContainer extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    console.log("single campus mount")
    this.props.fetchCampus(this.props.match.params.id);
  }

  render() {
    return <CampusView campus={this.props.campus} />;
  }
}

// map state to props
const mapState = (state) => {
  console.log("single campus mapstate")
  return {
    campus: state.campus,
  };
};

const mapDispatch = (dispatch) => {
  console.log("single campus dispatch")
  return {
    fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
  };
};

export default connect(mapState, mapDispatch)(CampusContainer);

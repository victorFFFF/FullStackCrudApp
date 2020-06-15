import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCampusThunk, deleteCampusThunk } from "../../thunks";

import { CampusView } from "../views";

class CampusContainer extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {

    this.props.fetchCampus(this.props.match.params.id);
  }

  handleDelete = (id) => {
    this.props.deleteCampus(id);
  };

  render() {
    return <CampusView campus={this.props.campus}
    handleDelete={this.handleDelete} />;
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
    deleteCampus: (id) => dispatch(deleteCampusThunk(id)),
  };
};

export default connect(mapState, mapDispatch)(CampusContainer);

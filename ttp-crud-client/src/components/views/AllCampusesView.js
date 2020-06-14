import React from "react";
import "./styles/AllCampusesView.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllCampusesView = (props) => {
  if (!props.allCampuses.length) {
    return <div className="all-campuses">There are no campuses</div>;
  }
  //  console.log("LOL "+ props.allCampuses[0].students[0].firstName)

  return (
    <div className="all-campuses">
      {props.allCampuses.map((campus) => (
        <div key={campus.id}>
          <Link to={`/campuses/${campus.id}`}>
            <h1>{campus.name}</h1>
          </Link>
          <img src={campus.imageUrl} width="300px" alt={campus.name} />
          <p>{campus.students.length} students</p>
          <Link to={'/campuses/new'}>
             <button>Add Campus</button>
          </Link>
          <Link to={`/campuses/${campus.id}/edit`}>
            <button>Edit</button> 
            </Link>
          <button onClick={() => props.handleDelete(campus.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;

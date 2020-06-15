import axios from "axios";


//ACTION TYPE
const FETCH_ALL_STUDENTS = "FETCH_ALL_STUDENTS";
const FETCH_CHOSEN_STUDENT = "FETCH_CHOSEN_STUDENT";
const ADD_STUDENT = "ADD_STUDENT";
const DELETE_STUDENT= "DELETE_STUDENT";
const EDIT_STUDENT = "EDIT_STUDENT";


//ACTION CREATOR
const fetchAllStudents = (students) =>
{
    return{
        type: FETCH_ALL_STUDENTS,
        payload: students,
    };
}

const fetchChosenStudent = (id) =>
{
    return{
        type: FETCH_CHOSEN_STUDENT,
        payload: id,
    }
} 

const addStudent = (student) =>
{
    return{
        type: ADD_STUDENT,
        payload: student,
    }
}

const deleteStudent =(id)=>
{
    return{
        type: DELETE_STUDENT,
        payload: id,
    }
}


const editStudent = (student) => {
  return {
    type: EDIT_STUDENT,
    payload: student,
  }
}



//THUNKS


//FETCH ALL STUDENTS
export const fetchAllStudentsThunk = () => (dispatch) =>{
    console.log("CALLING GET STUDENT");
    return axios   
            .get('/api/students')
            .then((rest) => rest.data)
            .then((students) => dispatch(fetchAllStudents(students)))
            .catch((err) => console.log(err));
};

//GET SELECTED STUDENT BASED ON ID
export const fetchChosenStudentThunk = (id) =>(dispatch) =>{
    console.log("INSIDE TO GET CHOSEN STUDENT")
    return axios
            .get(`/api/students/${id}`)
            .then((rest) => rest.data)
            .then((students) => dispatch(fetchChosenStudent(students)))
            .catch((err) => console.log(err));
};


//ADD STUDENT
export const addStudentThunk = (student) => (dispatch) => {
    console.log("INSIDE ADDSTUDENT THUNK " + student.theId)
    return axios
      .post(`/api/students/${student.campusId}`, student)
      .then((res) => res.data)
      .then((newStudent) => {
        dispatch(addStudent(newStudent));
        
      })
      .catch((err) => console.log("FAILED ADD STUDENT"));
  };


//DELETE STUDENT ON ID
  export const deleteStudentThunk = (id) => (dispatch) => {
    return axios
      .delete(`/api/students/${id}`)
      .then((res) => res.data)
      .then(() => dispatch(deleteStudent(id)))
      .catch((err) => console.log(err));
  };
  

//EDIT
  export const editStudentThunk = (id, student) => (dispatch) => {
      console.log("EDITSTUDENT THUNK " + student.firstName )
      console.log("ID" + id)
    return axios
      .put(`/api/students/${id}`, student)
      .then((res) => res.data)
      .then((updatedStudent) => dispatch(editStudent(updatedStudent)))
      .catch((err) => console.log(err));
  };
  

//REDUCER
const reducer = (state =[] , action) =>{
    switch(action.type){
        case FETCH_ALL_STUDENTS:
            return action.payload;
        case FETCH_CHOSEN_STUDENT:
            return action.payload;
        case ADD_STUDENT:
            return [...state, action.payload];
        case DELETE_STUDENT:
            return state.filter((student) => student.id != action.payload);
        case EDIT_STUDENT:
            return [...state, action.payload];
        default:
            return state;
    }
}

export default reducer;
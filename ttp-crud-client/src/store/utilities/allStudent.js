import axios from "axios";


//ACTION TYPE
const FETCH_ALL_STUDENTS = "FETCH_ALL_STUDENTS";
const FETCH_CHOSEN_STUDENT = "FETCH_CHOSEN_STUDENT";
const ADD_STUDENT = "ADD_STUDENT";
const DELETE_STUDENT="DELETE_STUDENT";


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
    console.log("CALLING TO GET CHOSEN STUDENT")
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
      .post(`/api/students/${student.theId}`, student)
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
        default:
            return state;
    }
}

export default reducer;
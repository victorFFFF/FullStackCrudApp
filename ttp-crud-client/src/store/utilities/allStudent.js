import axios from "axios";


//ACTION TYPE
const FETCH_ALL_STUDENTS = "FETCH_ALL_STUDENTS";
const FETCH_CHOSEN_STUDENT = "FETCH_CHOSEN_STUDENT";


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



//THUNKS


//FETCH ALL STUDENTS
export const fetchAllStudentsThunk = () => (dispatch) =>{
    console.log("CALLING GET STUDENT");
    return axios   
            .get('/api/students')
            .then((rest) => rest.data)
            .then((students) => dispatch(fetchAllStudents(students)))
            .catch((err) => console.log(err));
}

//GET SELECTED STUDENT BASED ON ID
export const fetchChosenStudentThunk = (id) =>(dispatch) =>{
    console.log("CALLING TO GET CHOSEN STUDENT")
    return axios
            .get(`/api/students/${id}`)
            .then((rest) => rest.data)
            .then((students) => dispatch(fetchChosenStudent(students)))
            .catch((err) => console.log(err));
}



// export const addStudentThunk = (student, ownProps) => (dispatch) => {
//     return axios
//       .post("/api/students", student)
//       .then((res) => res.data)
//       .then((student) => {
//         dispatch(addCampus(student));
//         ownProps.history.push(`/students`);
//       })
//       .catch((err) => console.log(err));
//   };





//REDUCER
const reducer = (state =[] , action) =>{
    switch(action.type){
        case FETCH_ALL_STUDENTS:
            return action.payload;
        case FETCH_CHOSEN_STUDENT:
            return action.payload;
        default:
            return state;
    }
}

export default reducer;
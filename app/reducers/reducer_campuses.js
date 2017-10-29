import axios from 'axios';

//ACTION TYPE
const GET_CAMPUSES = 'GET_CAMPUSES'

//ACTION CREATOR

function getAllCampuses(campuses) {
    const action = {
        type: GET_CAMPUSES,
        campuses
    }
    return action;
}
//REDUCER
export default function campusReducer(campuses = [], action) {
    switch (action.type) {
        case GET_CAMPUSES:
            //return state.concat(...action.campuses) 
            return campuses.concat(action.campuses)
        default:
            return campuses;
    }
}
//THUNK CREATOR
export const fetchCampuses = () => dispatch => {
    axios.get('/api/campuses')
        .then(res => dispatch(getAllCampuses(res.data)))
}
// export function fetchCampuses(){
//     return function(dispatch){
//         return axios.get('/api/campuses')
//         .then(res => 
//             {
//                 console.log('res.data',res.data)
//                 return res.data
//             })

//         .then(campuses => getAllCampuses(campuses))
//     }
// }


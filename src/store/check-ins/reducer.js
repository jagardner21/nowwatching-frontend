import { GET_CHECK_INS_PENDING, GET_ONE_CHECK_IN_PENDING, ADD_CHECK_IN_PENDING, EDIT_CHECK_IN_PENDING, DELETE_CHECK_IN_PENDING, GET_CHECK_INS_FAILED, GET_ONE_CHECK_IN_FAILED, ADD_CHECK_IN_FAILED, EDIT_CHECK_IN_FAILED, DELETE_CHECK_IN_FAILED, GET_CHECK_INS_SUCCESS, GET_ONE_CHECK_IN_SUCCESS, ADD_CHECK_IN_SUCCESS, EDIT_CHECK_IN_SUCCESS, DELETE_CHECK_IN_SUCCESS } from './constants'

const initialState = {
    all: [],
    oneCheckIn: {},
    err: {}   
}

export default (state = initialState, action) => {
    switch(action.type){
        case GET_CHECK_INS_PENDING:
        case GET_ONE_CHECK_IN_PENDING:
        case ADD_CHECK_IN_PENDING:
        case EDIT_CHECK_IN_PENDING:
        case DELETE_CHECK_IN_PENDING:
            return state;
        
        case GET_CHECK_INS_FAILED:
        case GET_ONE_CHECK_IN_FAILED:
        case ADD_CHECK_IN_FAILED:
        case EDIT_CHECK_IN_FAILED:
        case DELETE_CHECK_IN_FAILED:
            let error = action.payload
            return {
                ...state,
                err: error
            }

        case GET_CHECK_INS_SUCCESS:
            let checkIns = action.payload
            
            return {
                ...state,
                all: checkIns
            }

        // would it be better to filter all by user.id and get rid of oneUser altogether from store state?
        case GET_ONE_CHECK_IN_SUCCESS:
            let checkIn = action.payload
            return {
                ...state,
                oneCheckIn: checkIn
            }

        case ADD_CHECK_IN_SUCCESS: 
            let newCheckIn = action.payload
            return {
                all: state.all.unshift(newCheckIn),
                ...state
            }

        case EDIT_CHECK_IN_SUCCESS:
            let editedCheckIn = action.payload
            return {
                ...state,
                all: state.all.map(checkIn => {
                    if(checkIn.id == editedCheckIn.id){
                        return editedCheckIn
                    } else {
                        return checkIn
                    }
                })
            }

        case DELETE_CHECK_IN_SUCCESS: 
            let deletedCheckIn = action.payload
            return {
                ...state,
                all: state.all.filter(user => {
                    return user.id !== deletedCheckIn.id
                })
            }

        default: return state
    }
}


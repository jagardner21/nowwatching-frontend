import { GET_USERS_PENDING, GET_ONE_USER_PENDING, ADD_USER_PENDING, EDIT_USER_PENDING, DELETE_USER_PENDING, GET_USERS_SUCCESS, GET_ONE_USER_SUCCESS, GET_ONE_USER_FAILED, ADD_USER_SUCCESS, GET_USERS_FAILED, ADD_USER_FAILED, EDIT_USER_FAILED, DELETE_USER_FAILED, EDIT_USER_SUCCESS, DELETE_USER_SUCCESS } from './constants'
import { editUser } from './actions';

//logged in user hard coded until I learn how to use browser local storage
let initialState = {
    all: [],
    loggedInUser: {
        id: 1,
        name: "Henderson Mccoy",
        email: "hendersonmccoy@comtest.com"
    },
    oneUser: {},
    err: {}
}

export default (state = initialState, action) => {
    switch(action.type){
        case GET_USERS_PENDING:
        case GET_ONE_USER_PENDING:
        case ADD_USER_PENDING:
        case EDIT_USER_PENDING:
        case DELETE_USER_PENDING:
            return state;
        
        case GET_USERS_FAILED:
        case GET_ONE_USER_FAILED:
        case ADD_USER_FAILED:
        case EDIT_USER_FAILED:
        case DELETE_USER_FAILED:
            let error = action.payload
            return {
                ...state,
                err: error
            }

        case GET_USERS_SUCCESS:
            let users = action.payload
            return {
                ...state,
                all: users
            }

        // would it be better to filter all by user.id and get rid of oneUser altogether from store state?
        case GET_ONE_USER_SUCCESS: 
            let user = action.payload
            return {
                ...state,
                oneUser: user
            }

        case ADD_USER_SUCCESS: 
            let newUser = action.payload
            return {
                ...state,
                all: [newUser, ...state.all]
            }

        case EDIT_USER_SUCCESS:
            let editedUser = action.payload
            return {
                ...state,
                all: state.all.map(user => {
                    if(user.id == editedUser.id){
                        return editedUser
                    } else {
                        return user
                    }
                }),
                loggedInUser: editedUser
            }

        case DELETE_USER_SUCCESS: 
            let deletedUser = action.payload
            return {
                ...state,
                all: state.all.filter(user => {
                    return user.id !== deletedUser.id
                })
            }

        default: return state
    }
}


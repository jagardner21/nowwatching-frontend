import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import usersReducer from './users/reducer'
import checkInsReducer from './check-ins/reducer'

const rootReducer = combineReducers({
    users: usersReducer,
    checkIns: checkInsReducer
})

const middleware = [thunk, logger]

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))
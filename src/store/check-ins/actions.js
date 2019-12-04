import axios from 'axios'
import { GET_CHECK_INS_PENDING, GET_CHECK_INS_SUCCESS, GET_CHECK_INS_FAILED, GET_ONE_CHECK_IN_PENDING, GET_ONE_CHECK_IN_SUCCESS, GET_ONE_CHECK_IN_FAILED, ADD_CHECK_IN_PENDING, ADD_CHECK_IN_SUCCESS, ADD_CHECK_IN_FAILED, EDIT_CHECK_IN_PENDING, EDIT_CHECK_IN_SUCCESS, EDIT_CHECK_IN_FAILED, DELETE_CHECK_IN_PENDING, DELETE_CHECK_IN_SUCCESS, DELETE_CHECK_IN_FAILED } from '../check-ins/constants'

const url = 'http://localhost:8000/now-watching'

export const getCheckIns = () => {
    return dispatch => {
        dispatch({
            type: GET_CHECK_INS_PENDING
        })
        axios.get(`${url}/check-ins`)
            .then(res => {
                let checkIns = res.data
                dispatch({
                    type: GET_CHECK_INS_SUCCESS,
                    payload: checkIns
                })
            })
            .catch(error => {
                dispatch({
                    type: GET_CHECK_INS_FAILED,
                    payload: error
                })
            })
    }
}

export const getOneCheckIn = id => {
    return dispatch => {
        dispatch({
            type: GET_ONE_CHECK_IN_PENDING
        })
        axios.get(`${url}/check-ins/${id}`)
            .then(res => {
                let checkIn = res.data
                dispatch({
                    type: GET_ONE_CHECK_IN_SUCCESS,
                    payload: checkIn
                })
            })
            .catch(error => {
                dispatch({
                    type: GET_ONE_CHECK_IN_FAILED,
                    payload: error
                })
            })
    }
}

export const addCheckIn = () => {
    return dispatch => {
        dispatch({
            type: ADD_CHECK_IN_PENDING
        })
        axios.put(`${url}/check-ins`)
            .then(res => {
                let newCheckIn = res.json
                dispatch({
                    type: ADD_CHECK_IN_SUCCESS,
                    payload: newCheckIn
                })
            })
            .catch(error => {
                dispatch({
                    type: ADD_CHECK_IN_FAILED,
                    payload: error
                })
            })
    }
}

export const editCheckIn = id => {
    return dispatch => {
        dispatch({
            type: EDIT_CHECK_IN_PENDING
        })
        axios.patch(`${url}/check-in/${id}`)
            .then(res => {
                let editedCheckIn = res.data
                dispatch({
                    type: EDIT_CHECK_IN_SUCCESS,
                    payload: editedCheckIn
                })
            })
            .catch(error => {
                dispatch({
                    type: EDIT_CHECK_IN_FAILED,
                    payload: error
                })
            })
    }
}

export const deleteCheckIn = id => {
    return dispatch => {
        dispatch({
            type: DELETE_CHECK_IN_PENDING
        })
        axios.delete(`${url}/check-ins/${id}`)
            .then(res => {
                let deletedCheckIn = res.data
                dispatch({
                    type: DELETE_CHECK_IN_SUCCESS,
                    payload: deletedCheckIn
                })
            })
            .catch(error => {
                dispatch({
                    type: DELETE_CHECK_IN_FAILED,
                    payload: error
                })
            })

    }
}
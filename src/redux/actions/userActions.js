import { ADD_USER, ADD_USER_ERROR, ADD_USER_SUCCESS, DELETE_USER_ERROR, DELETE_USER_SUCCESS, FETCH_USER_ERROR, FETCH_USER_LOADING, FETCH_USER_SUCCESS, UPDATE_USER } from "../types/userTypes";
import axios from "axios"
import userComponent from "../../components/UserComponent";


export const addUser = (payload) => ({
    type: ADD_USER,
    payload
})

export const updateUser = (id, data) => ({
    type: UPDATE_USER,
    payload: {
        id: id,
        data: data
    }
})
export const fetchUserSuccess = (payload) => ({
    type: FETCH_USER_SUCCESS,
    payload
})
export const fetchUserError = (payload) => ({
    type: FETCH_USER_ERROR,
    payload
})
export const fetchUserLoading = (payload) => ({
    type: FETCH_USER_LOADING,
    payload
})
export const addUserSuccess = (payload) => ({
    type: ADD_USER_SUCCESS,
    payload
})
export const addUserError = (payload) => ({
    type: ADD_USER_ERROR,
    payload
})
export const deleteUserSuccess = (id) => ({
    type: DELETE_USER_SUCCESS,
    payload: {
        id: id,
    }
})
export const deleteUserError = (payload) => ({
    type: DELETE_USER_ERROR,
    payload
})





export const fetchUser = () => {
    return async (dispatch) => {
        dispatch(fetchUserLoading())
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/users')
            dispatch(fetchUserSuccess(res.data))
        } catch (err) {
            dispatch(fetchUserError(err))
        }
    }
}
export const addUserApi = (user) => {
    return async (dispatch) => {
        try {
            const res = await axios.post('https://jsonplaceholder.typicode.com/users',
                {
                    name: user.name,
                    email: user.email
                })
            dispatch(addUserSuccess(res.data))
        } catch (err) {
            dispatch(addUserError(err))
        }
    }
}
export const deleteUser = (id) => {
    return async (dispatch) => {
        try {
            const res = await axios.delete('https://jsonplaceholder.typicode.com/users/' + id)
            console.log(res.data)
            dispatch(deleteUserSuccess())
        } catch (err) {
            dispatch(deleteUserError())
        }
    }
}

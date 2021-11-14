import { ADD_USER, ADD_USER_ERROR, ADD_USER_SUCCESS, FETCH_USER_ERROR, FETCH_USER_LOADING, FETCH_USER_SUCCESS, UPDATE_USER } from "../types/userTypes"

const initialState = {
    listUser: [],
    loading: false,
    error: {}
}

const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case ADD_USER:
            return { ...state, listUser: [...state.listUser, payload] }
        case UPDATE_USER:
            const indexUpdatedUser = state.listUser.findIndex(user => {
                return user.id === payload.id
            })
            const user = state.listUser[indexUpdatedUser]
            const listUserupdated = state.listUser
            listUserupdated[indexUpdatedUser] = { ...user, ...payload.data }
            return { ...state, listUser: listUserupdated }
        case FETCH_USER_LOADING:
            return { ...state, loading: true }
        case FETCH_USER_SUCCESS:
            return { ...state, listUser: payload, loading: false }
        case FETCH_USER_ERROR:
            return { ...state, error: payload }
        case ADD_USER_SUCCESS:
            return { ...state, listUser: [...state.listUser, payload] }
        case ADD_USER_ERROR:
            return { ...state, error: payload }
        default:
            return state
    }
}
export default userReducer
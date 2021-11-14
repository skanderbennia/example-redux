import { ADD_USER, ADD_USER_ERROR, ADD_USER_SUCCESS, DELETE_USER, FETCH_USER_ERROR, FETCH_USER_LOADING, FETCH_USER_SUCCESS, SEARCH_USER, UPDATE_USER } from "../types/userTypes"

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
        case SEARCH_USER:
            if (payload === "")
                return { ...state }
            const listUserByName = state.listUser.find(user => {
                return user.name.includes(payload)
            })
            return { ...state, listUser: [listUserByName] }
        case DELETE_USER:
            const newList = state.listUser.filter(user => {
                return user.id !== payload.id
            })
            return { ...state, listUser: newList }
        default:
            return state
    }
}
export default userReducer
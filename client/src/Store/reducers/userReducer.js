import { SET_ERROR_LOGIN, SET_LOGIN_SUCCESS } from '../actions/actionType'

const initialState = {
  access_token: localStorage.getItem('access_token'),
  error: ''
}

function userReducer (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case SET_LOGIN_SUCCESS:
      return { ...state, access_token: payload, error: null }
    case SET_ERROR_LOGIN:
      return { ...state, error: payload }
    default:
      return state
  }
}

export default userReducer

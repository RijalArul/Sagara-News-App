import {
  SET_ERROR_LOGIN,
  SET_LOGIN_SUCCESS,
  SET_LOGOUT,
  SET_REGISTER_ERROR,
  SET_REGISTER_SUCCESS
} from '../actions/actionType'

const initialState = {
  access_token: localStorage.getItem('access_token'),
  error: ''
}

function userReducer (state = initialState, action) {
  const { type, payload } = action
  console.log(payload)
  switch (type) {
    case SET_LOGIN_SUCCESS:
      return { ...state, access_token: payload, error: null }
    case SET_REGISTER_SUCCESS:
      return { ...state, access_token: payload, error: null }
    case SET_ERROR_LOGIN:
      return { ...state, error: payload }
    case SET_REGISTER_ERROR:
      return { ...state, error: payload }
    case SET_LOGOUT:
      return { ...state, access_token: null }
    default:
      return state
  }
}

export default userReducer

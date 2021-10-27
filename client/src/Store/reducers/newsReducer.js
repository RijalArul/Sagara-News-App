import { SET_NEWS } from '../actions/actionType'

const initialState = {
  news: []
}

function newsReducer (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case SET_NEWS:
      return { ...state, news: payload }
    default:
      return state
  }
}

export default newsReducer

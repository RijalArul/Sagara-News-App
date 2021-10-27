import { SET_DETAIL_NEWS, SET_NEWS } from '../actions/actionType'

const initialState = {
  news: [],
  detail: JSON.parse(localStorage.getItem('news'))
}

function newsReducer (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case SET_NEWS:
      return { ...state, news: payload }
    case SET_DETAIL_NEWS:
      return { ...state, detail: JSON.parse(localStorage.getItem('news')) }
    default:
      return state
  }
}

export default newsReducer

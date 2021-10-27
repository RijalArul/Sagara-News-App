import { combineReducers } from 'redux'
import newsReducer from './newsReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
  newsState: newsReducer,
  usersState: userReducer
})

export default rootReducer

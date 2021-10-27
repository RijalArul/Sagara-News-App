import { combineReducers } from 'redux'
import newsReducer from './newsReducer'

const rootReducer = combineReducers({
  newsState: newsReducer
})

export default rootReducer

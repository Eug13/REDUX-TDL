import { combineReducers } from 'redux'
import todos from './todos'
import bread from './bread'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  todos,
  bread,
  visibilityFilter
})
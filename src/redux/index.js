import { combineReducers } from 'redux'
import listExpense from './reducers/expense'
import filterState from './reducers/filterState'

export default combineReducers({
  listExpense,
  filterState
})
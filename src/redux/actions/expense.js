import {
  ADD_EXPENSE,
  EDIT_EXPENSE,
  DELETE_EXPENSE,
  UPDATE_LIST_EXPENSE
} from "../constants"

export const addExpense = newExpense => ({
  type: ADD_EXPENSE,
  payload: newExpense
})

export const editExpense = edittedExpense => ({
  type: EDIT_EXPENSE,
  payload: edittedExpense
})

export const deleteExpense = id => ({
  type: DELETE_EXPENSE,
  id
})

export const updateListExpense = newListExpense => ({
  type: UPDATE_LIST_EXPENSE,
  payload: newListExpense
})

export const fetchListExpense = (url) =>
  dispatch =>
    fetch(url)
      .then(res => res.json())
      .then(listExpense => dispatch(updateListExpense(listExpense)))
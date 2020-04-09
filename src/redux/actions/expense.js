import { ADD_EXPENSE, EDIT_EXPENSE, DELETE_EXPENSE } from "../constants"

export const addExpense = (newExpense) => {
  return {
    type: ADD_EXPENSE,
    payload: newExpense
  }
}

export const editExpense = (edittedExpense) => {
  return {
    type: EDIT_EXPENSE,
    payload: edittedExpense
  }
}

export const deleteExpense = (id) => {
  return {
    type: DELETE_EXPENSE,
    id
  }
}
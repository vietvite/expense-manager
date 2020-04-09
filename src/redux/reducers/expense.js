import {
  ADD_EXPENSE,
  EDIT_EXPENSE,
  DELETE_EXPENSE
} from "../constants";

const initExpense = [
  {
    "id": 0,
    "date": "2020/3/19",
    "type": "food",
    "total": "20000000",
    "status": "done",
    "note": "breakfast"
  },
  {
    "id": 1,
    "date": "2020/3/19",
    "type": "food",
    "total": "20000000",
    "status": "inprogress",
    "note": "lunch"
  },
  {
    "id": 2,
    "date": "2020/3/19",
    "type": "food",
    "total": "20000000",
    "status": "inprogress",
    "note": "dinner"
  },
  {
    "id": 3,
    "date": "2020/3/19",
    "type": "income",
    "total": "200000000",
    "status": "done",
    "note": "rewaid"
  }
]

export default (state = initExpense, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return [...state, action.payload]
    case EDIT_EXPENSE:
      return state.map(
        expense => expense.id === action.payload.id ? action.payload : expense
      )
    case DELETE_EXPENSE:
      return state.filter(expense => expense.id !== action.id)
    default:
      return state
  }
}
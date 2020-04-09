import { UPDATE_FILTER } from "../constants"

const initFilterStates = {
  done: true,
  inprogress: true,
  income: true,
  outcome: true
}

export default (state = initFilterStates, action) => {
  switch (action.type) {
    case UPDATE_FILTER:
      return Object.assign({}, state, action.payload)

    default:
      return state
  }
}
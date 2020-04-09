import { UPDATE_FILTER } from "../constants";

export const updateFilter = checkboxState => ({
  type: UPDATE_FILTER,
  payload: checkboxState
})
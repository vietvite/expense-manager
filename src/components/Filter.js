import React from 'react'
import { connect } from 'react-redux'
import { updateFilter } from '../redux/actions/filterState';

function Filter({
  done,
  inprogress,
  income,
  outcome,
  changeFilterState
}) {
  return (
    <div className="filter-container">
      <p><strong>Filter expenses</strong></p>
      <div className="filter-item">
        <div className="filter-label">
          <p><strong>Status</strong></p>
        </div>
        <div className="filter-checkbox">
          <label><input
            type="checkbox"
            onChange={() => changeFilterState({ done: !done })}
            checked={done} />Done</label>
          <label><input
            type="checkbox"
            onChange={() => changeFilterState({ inprogress: !inprogress })}
            checked={inprogress} />Inprogess</label>
        </div>
      </div>
      <div className="filter-item">
        <div className="filter-label">
          <p><strong>Type</strong></p>
        </div>
        <div className="filter-checkbox">
          <label><input
            type="checkbox"
            onChange={() => changeFilterState({ income: !income })}
            checked={income} />Income</label>
          <label><input
            type="checkbox"
            onChange={() => changeFilterState({ outcome: !outcome })}
            checked={outcome} />Outcome</label>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => state.filterState

const mapDispatchToProps = (dispatch) => {
  return { changeFilterState: checkboxState => dispatch(updateFilter(checkboxState)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
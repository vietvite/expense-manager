import React from 'react'

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
            // name="done"
            // id="status-done"
            onChange={() => changeFilterState({ done: !done })}
            checked={done} />Done</label>
          <label><input
            type="checkbox"
            // name="inprogress"
            // id="status-inprogess"
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
            // name="income"
            // id="status-income"
            onChange={() => changeFilterState({ income: !income })}
            checked={income} />Income</label>
          <label><input
            type="checkbox"
            // name="outcome"
            // id="status-outcome"
            onChange={() => changeFilterState({ outcome: !outcome })}
            checked={outcome} />Outcome</label>
        </div>
      </div>
    </div>
  )
}

export default Filter

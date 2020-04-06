import React from 'react'

function Filter() {
  return (
    <div class="filter-container">
      <p><strong>Filter expenses</strong></p>
      <div class="filter-item">
        <div class="filter-label">
          <p><strong>Status</strong></p>
        </div>
        <div class="filter-checkbox">
          <label><input type="checkbox" name="done" id="status-done" />Done</label>
          <label><input type="checkbox" name="inprogress" id="status-inprogess" />Inprogess</label>
        </div>
      </div>
      <div class="filter-item">
        <div class="filter-label">
          <p><strong>Type</strong></p>
        </div>
        <div class="filter-checkbox">
          <label><input type="checkbox" name="income" id="status-income" />Income</label>
          <label><input type="checkbox" name="outcome" id="status-outcome" />Outcome</label>
        </div>
      </div>
    </div>
  )
}

export default Filter

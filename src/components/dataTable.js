import React from 'react'

function DataTable() {
  return (
    <div class="data-container">
      <p id="message" style={{ display: 'none' }}></p>
      <table>
        <tbody id="data-table"></tbody>
      </table>

      <button class="btn-bottom-right" id="add">+</button>
    </div>
  )
}

export default DataTable

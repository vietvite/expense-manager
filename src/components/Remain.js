import React from 'react'
import { parseCurrency, calcSum, expenseFilter } from '../common'
import { connect } from 'react-redux'

function Remain({ remain }) {
  return (
    <div className="detail-container">
      <p><strong>Remain</strong></p>
      <p id="remain">{parseCurrency(remain)}</p>
    </div>
  )
}

const mapStateToProps = ({ listExpense, filterState }) => ({
  remain: calcSum(expenseFilter(listExpense, filterState))
})
export default connect(mapStateToProps)(Remain)

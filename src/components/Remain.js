import React from 'react'
import { parseCurrency } from '../common'

function Remain({ remain }) {
  return (
    <div className="detail-container">
      <p><strong>Remain</strong></p>
      <p id="remain">{parseCurrency(remain)}</p>
    </div>
  )
}

export default Remain

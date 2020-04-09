import React from 'react'
import { parseCurrency, expenseFilter } from '../common'
import { connect } from 'react-redux'

function DataTable({ listExpense = [], openAddModal, triggerEditModal }) {
  const table =
    (<table>
      <tbody id="data-table">
        <TableContent listExpense={listExpense} />
      </tbody>
    </table>)
  const errMessage = <p
    style={{
      textAlign: 'center',
      fontSize: '2rem',
      marginTop: '2rem'
    }}>No data now</p>

  return (
    <div className="data-container">
      {!!listExpense.length
        ? table
        : errMessage}
      <button
        onClick={openAddModal}
        className="btn-bottom-right"
      >+</button>
    </div>
  )

  function TableContent({ listExpense: data }) {
    if (!(data instanceof Array) || data.length === 0) { return }

    const firstObj = Object.keys(data[0]) // Just to take the table title rely on obj keys

    const rowsContents = data.map((obj, index) => (
      <tr onDoubleClick={() => { triggerEditModal(obj) }} key={index}>
        {objectToTd({ key: 'date', value: obj['date'] })}
        {objectToTd({ key: 'type', value: obj['type'] })}
        {objectToTd({ key: 'total', value: obj['total'] })}
        {objectToTd({ key: 'status', value: obj['status'] })}
        {objectToTd({ key: 'note', value: obj['note'] })}
      </tr>)
    );

    return (
      <>
        <RowTitles rowTitles={firstObj} />
        {rowsContents}
      </>
    )

    function objectToTd({ key, value }) {
      const classes = getStyleOfType(value)
      const data = key === 'total' ? parseCurrency(value) : value
      return (<td className={classes}>{data}</td>)
    }

    function RowTitles({ rowTitles }) {
      return (
        <tr>
          {rowTitles.map(key => {
            if (key === 'id') { return }
            return <th key={key}>{key}</th>
          })}
        </tr>
      )
    }

    function getStyleOfType(text) {
      switch (text) {
        case 'income':
          return ['text-green', 'font-bold'].join(' ')
        case 'inprogress':
          return ['font-bold', 'font-italic'].join(' ')
        case 'done':
          return ['font-strike', 'opacity-600'].join(' ')
        default:
          return []
      }
    }
  }
}


const mapStateToProps = (state) => {
  return { listExpense: expenseFilter(state.listExpense, state.filterState) }
}

export default connect(mapStateToProps)(DataTable)
import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import DataTable from './components/DataTable';
import Remain from './components/Remain';
import Modal from './components/Modal';
import { calcSum, expenseFilter } from './common'
import { SHOW_EDIT_MODAL, SHOW_ADD_MODAL } from './constants'

const initListExpense = []
const initFilterStates = {
  done: true,
  inprogress: true,
  income: true,
  outcome: true
}
const listModal = {
  [SHOW_EDIT_MODAL]: { title: 'Edit expense', type: 'edit' },
  [SHOW_ADD_MODAL]: { title: 'Add expense', type: 'add' },
}

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      filterStates: initFilterStates,
      listExpense: initListExpense,
      showingModal: '',
      rowSelectedState: {}
    }
    this.closeModal = this.closeModal.bind(this)
    this.openAddModal = this.openAddModal.bind(this)
    this.openEditModal = this.openEditModal.bind(this)
    this.changeFilterState = this.changeFilterState.bind(this)
    this.addExpense = this.addExpense.bind(this)
    this.editExpense = this.editExpense.bind(this)
    this.triggerEditModal = this.triggerEditModal.bind(this)
    this.deleteExpense = this.deleteExpense.bind(this)
  }

  closeModal() { this.setState({ showingModal: '' }) }
  openAddModal() { this.setState({ showingModal: SHOW_ADD_MODAL }) }
  openEditModal() { this.setState({ showingModal: SHOW_EDIT_MODAL }) }

  componentDidMount() {
    fetch('./api/expense.json')
      .then(res => res.json())
      .then(listEx => this.setState({ listExpense: listEx }))
  }
  changeFilterState(state) {
    this.setState({ filterStates: Object.assign({}, this.state.filterStates, state) })
  }
  addExpense(expense) {
    const newList = [...this.state.listExpense, expense]
    this.setState({ listExpense: newList })
    this.closeModal()
  }
  editExpense(edittedExpense) {
    const newListExpense = this.state.listExpense.map(
      originExpense => originExpense.id === edittedExpense.id ? edittedExpense : originExpense)
    this.setState({ listExpense: newListExpense })
    this.closeModal()
  }
  triggerEditModal(stateToEdit) {
    this.setState({ rowSelectedState: stateToEdit })
    this.openEditModal()
  }
  deleteExpense(id) {
    this.setState({
      listExpense: this.state.listExpense.filter(originExpense => originExpense.id !== id)
    })
    this.closeModal()
  }

  render() {
    const filteredExpense = expenseFilter(this.state.listExpense, this.state.filterStates)
    return (
      <>
        <header>MY EXPENSE MANAGER</header>
        <div className="container">
          <div className="wrapper">
            <Filter
              {...this.state.filterStates}
              changeFilterState={this.changeFilterState} />
            <DataTable
              listExpense={filteredExpense}
              openAddModal={this.openAddModal}
              triggerEditModal={this.triggerEditModal}
            />
            <Remain remain={calcSum(filteredExpense)} />
          </div>
        </div>
        {this.state.showingModal && <Modal
          modal={listModal[this.state.showingModal]}
          editState={this.state.rowSelectedState}
          addExpense={this.addExpense}
          editExpense={this.editExpense}
          deleteExpense={this.deleteExpense}
          closeModal={this.closeModal} />}
      </>
    );
  }
}

export default App;

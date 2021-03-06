import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import DataTable from './components/DataTable';
import Remain from './components/Remain';
import Modal from './components/Modal';
import { SHOW_EDIT_MODAL, SHOW_ADD_MODAL } from './constants'
import { fetchListExpense } from './redux/actions/expense';
import { connect } from 'react-redux';

const listModal = {
  [SHOW_EDIT_MODAL]: { title: 'Edit expense', type: 'edit' },
  [SHOW_ADD_MODAL]: { title: 'Add expense', type: 'add' },
}

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      showingModal: '',
      stateToEdit: {}
    }
    this.closeModal = this.closeModal.bind(this)
    this.openAddModal = this.openAddModal.bind(this)
    this.openEditModal = this.openEditModal.bind(this)
    this.triggerEditModal = this.triggerEditModal.bind(this)
  }

  closeModal() { this.setState({ showingModal: '' }) }
  openAddModal() { this.setState({ showingModal: SHOW_ADD_MODAL }) }
  openEditModal() { this.setState({ showingModal: SHOW_EDIT_MODAL }) }
  triggerEditModal(stateToEdit) {
    this.setState({ stateToEdit: stateToEdit })
    this.openEditModal()
  }

  componentDidMount() {
    const url = './api/expense.json'
    this.props.dispatch(fetchListExpense(url))
  }

  render() {
    return (
      <>
        <header>MY EXPENSE MANAGER</header>
        <div className="container">
          <div className="wrapper">
            <Filter />
            <DataTable
              openAddModal={this.openAddModal}
              triggerEditModal={this.triggerEditModal}
            />
            <Remain />
          </div>
        </div>
        {this.state.showingModal && <Modal
          modal={listModal[this.state.showingModal]}
          editState={this.state.stateToEdit}
          closeModal={this.closeModal} />}
      </>
    );
  }
}

export default connect()(App)
import React from 'react'
import { isValid, formatDate } from '../common'
import shortid from 'shortid'
import { connect } from 'react-redux'
import { addExpense, editExpense, deleteExpense } from '../redux/actions/expense'

class Modal extends React.Component {
  constructor() {
    super()
    this.state = {
      total: '',
      type: '',
      note: '',
      status: true
    }

    this.submitHandler = this.submitHandler.bind(this)
    this.getEditProps = this.getEditProps.bind(this)
    this.textChangeHandler = this.textChangeHandler.bind(this)
    this.checkboxHandler = this.checkboxHandler.bind(this)
  }

  componentDidMount() {
    // Set default state from props
    this.setState(
      Object.assign(this.state, this.getEditProps())
    )
  }

  textChangeHandler({ target: { name, value } }) {
    this.setState({ [name]: value })
  }

  checkboxHandler({ target: { name, checked } }) {
    this.setState({ [name]: checked })
  }

  getEditProps() {
    if (openEditModal(this.props)) {
      const status =
        this.props.editState.status === 'done'
          ? true
          : false
      return { ...this.props.editState, status }
    }
    return {}

    function openEditModal(props) {
      return props && props.modal.type === 'edit'
    }
  }

  submitHandler(e) {
    e.preventDefault()
    const total = this.state.total.trim()
    const type = this.state.type.trim()
    const note = this.state.note.trim()
    const status = this.state.status ? 'done' : 'inprogress'

    const REGEX_ONLY_NUMBER = /^([0-9]+)$/
    const REGEX_ONLY_STRING = /^([a-zA-Z]+)$/

    if (!isValid(REGEX_ONLY_NUMBER, total)) {
      alert('Total must be a number')
      return false
    }
    if (!isValid(REGEX_ONLY_STRING, type)) {
      alert('Type must be only string')
      return false
    }

    const newExpense = {
      total,
      type,
      note,
      status,
      date: formatDate()
    }

    if (this.props.modal.type === 'add') {
      newExpense.id = shortid.generate()
      this.props.addExpense(newExpense)
    } else {
      newExpense.id = this.state.id
      this.props.editExpense(newExpense)
    }

    this.props.closeModal()
  }

  render() {
    const { modal, closeModal, deleteExpense } = this.props
    return (
      <div className="modal">
        <div className="modal-container">
          <form onSubmit={this.submitHandler}>
            <h2>{modal.title}</h2>

            <div className="form-input">
              <label>Total</label>
              <input type="text" name="total"
                onChange={this.textChangeHandler}
                value={this.state.total} autoFocus />
            </div>
            <div className="form-input">
              <label>Type</label>
              <input type="text" name="type"
                onChange={this.textChangeHandler}
                value={this.state.type} />
            </div>
            <div className="form-input">
              <label>Note</label>
              <input type="text" name="note"
                onChange={this.textChangeHandler}
                value={this.state.note} />
            </div>
            <div className="form-input">
              <label><input type="checkbox" name="status"
                onChange={this.checkboxHandler}
                checked={this.state.status} />Done</label>
            </div>

            <div className="group-btn">
              <button type="submit" className="btn btn-bg-primary">Save</button>
              <button onClick={closeModal} className="btn btn-primary">Cancel</button>
              {modal.type === 'edit' && <button onClick={() => {
                deleteExpense(this.state.id)
              }} className="btn btn-danger">Delete</button>}
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = store => ({})

const mapDispatchToProps = dispatch => {
  return {
    addExpense: newExpense => dispatch(addExpense(newExpense)),
    editExpense: edittedExpense => dispatch(editExpense(edittedExpense)),
    deleteExpense: id => dispatch(deleteExpense(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)

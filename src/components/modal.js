import React from 'react'

function modal() {
  return (
    <div id="edit-modal" class="modal">
      <div class="modal-container">
        <form id="edit" action="">
          <h2>Edit Expense</h2>
          <div class="form-input">
            <label for="edit">Total<input type="text" name="total" id="edit-total" /></label>

          </div>
          <div class="form-input">
            <label for="edit">Type</label>
            <input type="text" name="type" id="edit-type" />
          </div>
          <div class="form-input">
            <label for="edit">Note</label>
            <input type="text" name="note" id="edit-note" />
          </div>

          <div class="form-input">
            <label><input type="checkbox" name="done" id="edit-done" />Done</label>
          </div>

          <div class="group-btn">
            <button type="submit" class="btn btn-bg-primary">Save</button>
            <button id="edit-modal-cancel" class="btn btn-primary">Cancel</button>
            <button id="edit-modal-delete" class="btn btn-danger">Delete</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default modal

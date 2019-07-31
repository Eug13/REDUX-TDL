import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
  let input
  return (
    <div className='add_form'>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <input ref={node => input = node} placeholder="Add Todo"/>
        <button type="submit">
        <i className="fas fa-plus"></i> Add Todo
        </button>
      </form>
    </div>
  )
}


export default connect()(AddTodo)
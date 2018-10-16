import React from 'react'
import { connect } from 'react-redux'
import { editTodo, eTodo } from '../actions'

const EditTodo = ({ dispatch,id }) => {
  let input

  return (
    <div>
      <form 
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }

          let text = input.value;
          dispatch(editTodo(id,text))
          input.value = ''
          dispatch(eTodo(id))
        }}
      >
        <input ref={node => input = node} />
        <button className='subEdit' type="submit" >
          Edit Todo
        </button>
      </form>
    </div>
  )
}

export default connect()(EditTodo)
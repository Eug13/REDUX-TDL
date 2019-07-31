import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { delTodo ,eTodo } from '../actions'
import EditTodo from '../containers/EditTodo'

const Todo = ({ onClick, completed, text, dispatch,edit, id }) => (
  <div>

  <li
    onClick={onClick}
    style={ {
      textDecoration: completed ? 'line-through' : 'none',
      color: completed ? 'red' : 'orange',
      borderColor:completed ? 'red' : 'orange'
    }}
  >
  <i className="fas fa-th-list"></i>
    {text}
  </li>
 
  {
    completed===true?<button className="btn_del" onClick={()=>dispatch(delTodo(id))}><i className="fas fa-trash-alt"></i></button>:
     edit===false?<button className="btn_edit" onClick={()=>dispatch(eTodo(id))}><i className="far fa-edit"></i></button>:null

  }      
      { edit===true?
      <div>
    <EditTodo id={id}/>
      </div>:null }

      </div>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default connect()(Todo)
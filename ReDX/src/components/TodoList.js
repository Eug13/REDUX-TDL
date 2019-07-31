import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos,bread, toggleTodo ,delTodo}) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)}
      id={todo.id}
      />
    )}
    {showBread(bread)}

  </ul>
)


const showBread =(bread)=>{

return bread.map((i,index) => <div key={index}>For: {i.forPerson}  secret: {i.secretSauce.title}</div>)
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoList
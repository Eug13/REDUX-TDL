const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
          edit:false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? { ...todo, completed: !todo.completed }
          : todo
      )

      case 'E_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? { ...todo, edit: !todo.edit }
          : todo
      ) 
    case 'EDIT_TODO':
      return state.map(todo=>
        (todo.id === action.id)
      ? { ...todo, text: action.text }
      : todo)

    case 'DEL_TODO':
      let data = state.filter(item => item.id !== action.id)
      console.log(data)
      return data  

    default:
      return state
  }
}
export default todos
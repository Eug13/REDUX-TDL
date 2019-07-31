
let nextTodoId = 0

export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const eTodo = id => ({
  type: 'E_TODO',
  id
})

export const delTodo = id => ({
  type: 'DEL_TODO',
  id
})

export const editTodo = (id,text) => ({
  type: 'EDIT_TODO',
  id,
  text
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const makeASandwich =(forPerson, secretSauce)=> {
  return {
    type: 'MAKE_SANDWICH',
    forPerson,
    secretSauce
  };
}

export const apologize=(fromPerson, toPerson, error)=> {
  return {
    type: 'APOLOGIZE',
    fromPerson,
    toPerson,
    error
  };
}

export const withdrawMoney=(amount)=> {
  return {
    type: 'WITHDRAW',
    amount
  };
}
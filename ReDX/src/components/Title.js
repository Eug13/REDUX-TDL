import React from 'react'
import { connect } from 'react-redux'
import { makeASandwich, apologize } from '../actions'// withdrawMoney 

var c =0;
const fetchSecretSauce =()=> {
  c++;
  return fetch(`https://jsonplaceholder.typicode.com/todos/${c}`).then(res=>res.json());
}


const makeASandwichWithSecretSauce=(forPerson)=> {
  // We can invert control here by returning a function - the "thunk".
  // When this function is passed to `dispatch`, the thunk middleware will intercept it,
  // and call it with `dispatch` and `getState` as arguments. 
  // This gives the thunk function the ability to run some logic, and still interact with the store.
  return function (dispatch) {
    return fetchSecretSauce().then(
      sauce => dispatch(makeASandwich(forPerson, sauce)),
      error => dispatch(apologize('The Sandwich Shop', forPerson, error))
    );
  };
}

const Title = ({dispatch,bread}) => console.log('---',dispatch,bread)|| (
  <div>
    <h1>React Redux Todo List!</h1>
    <button onClick={()=>dispatch( makeASandwichWithSecretSauce('Me'))}>withdrawMoney</button>
    { bread }
  </div>
)

export default connect()(Title)




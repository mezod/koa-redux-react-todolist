import fetch from 'isomorphic-fetch';

/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const REMOVE_TODO = 'REMOVE_TODO';

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

/*
 * action creators
 */

export function addTodo(todo) {
  return { type: ADD_TODO, todo };
}

export function createTodo(text) {
  return function(dispatch){
    return fetch('http://localhost:3000/todos',{
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: text,
        completed: 0
      })
    })
    .then(res => res.json())
    .then(todo => dispatch(addTodo(todo)));
  };
}

export function completeTodo(index) {
  return { type: COMPLETE_TODO, index };
}

export function updateTodo(index, todo) {
  return function(dispatch){
    return fetch('http://localhost:3000/todos/'+todo.id,{
      method: 'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: todo.text,
        completed: 1
      })
    })
    .then(res => res.json())
    .then(todo => dispatch(completeTodo(index)));
  };
}

export function removeTodo(index) {
  return { type: REMOVE_TODO, index };
}

export function deleteTodo(index, todo){
  console.log(index);
  console.log('http://localhost:3000/todos/'+todo.id);
  return function(dispatch){
    return fetch('http://localhost:3000/todos/'+todo.id,{
      method: 'delete',
    })
    .then(res => res.json())
    .then(todo => dispatch(removeTodo(index)));
  };
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter };
}

export function receiveTodos(todos) {
  return { type: RECEIVE_TODOS, todos};
}

export function fetchTodos() {
  return function(dispatch){ 
  	return fetch('http://localhost:3000/todos')
  	.then(res => res.json())
  	.then(todos => dispatch(receiveTodos(todos)));
  };
}
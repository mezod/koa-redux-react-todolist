import React from 'react';
import Todo from './Todo.jsx';

export default class Todos extends React.Component {
 
  render(){

  	const todos = this.props.items;

  	return (

  		<ul className='todos'>{todos.map(this.renderTodo)}</ul>
	
  	);
  } 

  renderTodo(todo){
  	return (
  		<li key={`todo${todo.id}`}>
  			<Todo task={todo.task} />
  		</li>
  	);
  }
}
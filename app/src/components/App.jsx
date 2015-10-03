import React from 'react';
import Todos from './Todos.jsx';


require('./App.scss');

const todos = [
	{
		id: 1,
		task: 'build my boilerplate'
	},
	{
		id: 2,
		task: 'learn react'
	},
	{
		id: 3,
		task: 'learn redux'
	}
]

export default class App extends React.Component {
  render(){
    return <Todos items={todos}/>;
  }
}
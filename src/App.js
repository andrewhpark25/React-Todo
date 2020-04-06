import React from 'react';
import { v4 as uuid } from 'uuid'
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css';

const todos = [];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todos
    };
  }

  addItem = (e, item) => {
    e.preventDefault();
    const newItem = {
      task: item,
      id: uuid(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newItem]
    });
    console.log(newItem);
  };

  toggleItem = itemId => {

    this.setState({
      todos: this.state.todos.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
           completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  clearCompleted = e => {
    e.preventDefault();
    // if item is completed (item.completed is true) then filter out
    this.setState({
      todos: this.state.todos.filter(item => !item.completed)
    });
  };

  render() {
    return (
        <div className="App">
          <div className="header">
            <h1>Todo List: MVP</h1>
            <TodoForm addItem={this.addItem} />
          </div>
          <TodoList
            todos={this.state.todos}
            toggleItem={this.toggleItem}
            clearCompleted={this.clearCompleted}
          />
        </div>
    );
  }
}

export default App;

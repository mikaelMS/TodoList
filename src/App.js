import React, { Component } from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out trash',
        completed: false
      },
      {
        id: 2,
        title: 'Phone her',
        completed: false
      },
      {
        id: 3,
        title: 'Make a fire',
        completed: false
      }
    ]
  };

  // Toggle Complete with map method
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  // Delete todo with filter method
  delTodo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => {
        if (todo.id === id) {
          return false; // false = not in new array
        } else {
          return true; // true = in new array
        }
      })
    });
  };

  render() {
    console.log(this.state.todos);
    return (
      <div className='App'>
        <div className='container'>
          <Header />
          <AddTodo />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;

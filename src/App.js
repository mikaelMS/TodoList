import React, { Component } from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import './App.css';
import uuid from 'uuid';

class App extends Component {
  // State is gonna be shard with all Components
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Take out trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Phone her',
        completed: false
      },
      {
        id: uuid.v4(),
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

  // Gets passed the title
  addTodo = title => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completd: false
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <div className='App'>
        <div className='container'>
          <Header />
          <AddTodo addTodo={this.addTodo} />
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

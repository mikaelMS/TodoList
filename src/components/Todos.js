import React, { Component } from 'react';
import Item from './Item';

class Todos extends Component {
  render() {
    return this.props.todos.map(todo => <Item key={todo.id} todo={todo} />);
  }
}

export default Todos;

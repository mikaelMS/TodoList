import React, { Component } from 'react';
import Item from './Item';
import Proptypes from 'prop-types';

class Todos extends Component {
  // markComplete = () => {
  //   console.log('From Item.js');
  // };

  render() {
    return this.props.todos.map(todo => (
      <Item
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo}
      />
    ));
  }
}

// PropTypes
Todos.propTypes = {
  todos: Proptypes.array.isRequired
};

export default Todos;

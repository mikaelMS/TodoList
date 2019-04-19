import React, { Component } from 'react';

export class Item extends Component {
  render() {
    return (
      <div>
        <p>{this.props.todo.title}</p>
      </div>
    );
  }
}

export default Item;

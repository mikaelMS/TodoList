import React, { Component } from 'react';
import Proptypes from 'prop-types';

export class Item extends Component {
  // getStyleOld = () => {
  //   if (this.props.todo.completed) {
  //     return {
  //       textDecoration: 'line-through'
  //     };
  //   } else {
  //     return {
  //       textDecoration: 'none'
  //     };
  //   }
  // };

  getStyle = () => {
    return {
      color: '#fff',
      backgroundColor: '#333',
      borderBottom: '1px solid #ccc',
      padding: '10px',
      // HOLY SHIT thats smart
      textDecoration:
        this.props.todo.completed === true ? 'line-through' : 'none'
    };
  };

  markComplete = () => {};

  render() {
    return (
      <div style={this.getStyle()}>
        <p>
          <input type='checkbox' onChange={this.markComplete} />
          {this.props.todo.title}
        </p>
      </div>
    );
  }
}

// PropTypes
Item.propTypes = {
  todo: Proptypes.object.isRequired
};

export default Item;

// Important, because style is in an object
const itemStyle = {
  color: '#fff',
  backgroundColor: '#333'
};

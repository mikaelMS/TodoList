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

  // Component drilling (State in App.js, can't say this.set.state)
  // Climb the ladder through props (Item -> Todos -> App.js)
  //  Make Methods inside our props
  // markComplete = e => {
  //   console.log(this.props);
  // };

  render() {
    // Pulls only id/title from prop todo
    // Now we dont have to write this.props.todo.id every time
    const { id, title } = this.props.todo;

    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type='checkbox'
            style={checkboxStyle}
            onChange={this.props.markComplete.bind(this, id)}
          />
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
            X
          </button>
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
const checkboxStyle = {
  marginRight: '6px'
};

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 8px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
};

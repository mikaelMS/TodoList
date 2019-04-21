// rec + Tab

import React, { Component } from 'react';

export class AddTodo extends Component {
  state = {
    title: ''
  };

  // State in component, so dont have to go up to App.js
  // Should use [] and match it to the name tag (instead of title:)
  typeIn = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    // TODO: Check it out
    e.preventDefault();
    // addTodo is in App.js
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input
          type='text'
          name='title'
          placeholder='Add Todo...'
          style={{ flex: '10', padding: '5px' }}
          value={this.state.title}
          onChange={this.typeIn}
        />
        <input
          type='submit'
          value='Submit'
          className='btn'
          style={{ flex: 1 }}
        />
      </form>
    );
  }
}

export default AddTodo;

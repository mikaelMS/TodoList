// rcf tab possible

import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>My Todo List</h1>
      <Link to='/' style={linkStyle}>
        Home
      </Link>{' '}
      |
      <Link to='/about' style={linkStyle}>
        About
      </Link>
    </header>
  );
}

const headerStyle = {
  padding: '10px',
  textAlign: 'center'
};

const linkStyle = {
  color: '#508EF5',
  textDecoration: 'none'
};

export default Header;

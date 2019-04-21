import React from 'react';

function About() {
  return (
    // Return must return a wrapped in a single element
    //If you dont need a div/elemnt in the dom, you can use a React Fragment
    <React.Fragment>
      <h1>About</h1>
      <p>Todolist app v1.0.0. It a first React tutorial</p>
    </React.Fragment>
  );
}

export default About;

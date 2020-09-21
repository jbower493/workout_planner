import React from 'react';

const Navbar = (props) => {
  return (
    <header>
      <h1>Workout Planner</h1>
      {props.user ? <p className="logout-button" onClick={props.logout} >Logout</p> : null}
    </header>
  )
};

export default Navbar;
import React from 'react';

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Spinner
} from 'reactstrap';

const AppNavbar = (props) => {
  let button;
  if(!props.fetching) {
    button = <NavLink className="logout-button" onClick={props.logout} >Logout</NavLink>;
  } else {
    button = <Spinner size="sm" color="light" />
  }

  return (
    <Navbar className="mb-5" color="dark" dark expand="sm">
      <Container>
        <NavbarBrand>Workout Planner</NavbarBrand>
        <Nav className="ml-auto" navbar>
          {props.user ? <NavItem>
              {button}
            </NavItem> : null
          }
        </Nav>
      </Container>
    </Navbar>
  )
};

export default AppNavbar;
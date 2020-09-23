import React from 'react';

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

const AppNavbar = (props) => {
  return (
    <Navbar className="mb-5" color="dark" dark expand="sm">
      <Container>
        <NavbarBrand>Workout Planner</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink>About</NavLink>
          </NavItem>
          {props.user ? <NavItem>
              <NavLink className="logout-button" onClick={props.logout} >Logout</NavLink>
            </NavItem> : null
          }
        </Nav>
      </Container>
    </Navbar>
  )
};

export default AppNavbar;
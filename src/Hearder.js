import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Nav, Navbar } from 'react-bootstrap';

import {
  Link,
  useHistory
} from "react-router-dom";
import { logOut, setUser } from './actions';

function Header() {
  const dispatch = useDispatch();

  const isUserActive = useSelector(state => state.userData.isUserActive);
  const userData = useSelector(state => state.userData.user);

  const history = useHistory();

  function handleClick(){
    dispatch(logOut());
    dispatch(setUser({}));
    history.push('/home');
  }

  return (
    <div className="headerNavBar">

      <Navbar bg="dark" variant="dark" expand="sm" sticky="top">

        <Navbar.Brand as={Link} to="/home">
        {
              isUserActive ?
              <Navbar.Text>Hello, {userData.name}</Navbar.Text>
              :
              <Navbar.Text>React App</Navbar.Text>
        }
          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/store">Store</Nav.Link>
          </Nav>
          <Nav>
            {
              isUserActive ?
              <Nav.Link as={Link} to="/home" onClick={handleClick}>
                  <Navbar.Text>Logout</Navbar.Text>
              </Nav.Link>
              :
              <Nav.Link as={Link} to="/loginForm">Login</Nav.Link>
              }
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    </div>
  )
}

export default Header;

import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import {
  Box,
  Link as RebassLink,
  Flex,
  Text
} from 'rebass';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {
  Link as RouterLink,
  useHistory
} from "react-router-dom";
import { logOut } from './actions';

// user props - one way data flow
function Header() {

  const dispatch = useDispatch();
  const isUserActive = useSelector(state => state.isLoggedIn);
  const history = useHistory();

  function handleClick(){
    dispatch(logOut());
    history.push('/home');
  }

  return (
    <div>

<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link path="/store">Store</Nav.Link>
      {
          isUserActive ?
          <Nav.Link href="" onClick={handleClick}>Logout</Nav.Link>
          :
          <Nav.Link href="/loginForm">Login</Nav.Link>
        }
    </Nav>
  </Navbar.Collapse>
</Navbar>


      <Flex
        px={3}
        color='white'
        bg='black'
        alignItems='center'>
        <Text p={3} fontWeight='bold'>Hello, wellcome to React App.</Text>
        <Box mx='auto' />
        <RebassLink to="/store"
          sx={{
            display: 'inline-block',
            fontWeight: 'bold',
            px: 2,
            py: 1,
            color: 'inherit',
          }}
          as={RouterLink}>
            Store
        </RebassLink> 
        {
          isUserActive ?
            <RebassLink sx={{
              display: 'inline-block',
              fontWeight: 'bold',
              px: 2,
              py: 1,
              color: 'inherit'
            }} 
            onClick={handleClick}>
              Logout
            </RebassLink>
          :
            <RebassLink to="/loginForm"
              sx={{
                display: 'inline-block',
                fontWeight: 'bold',
                px: 2,
                py: 1,
                color: 'inherit',
              }} 
              as={RouterLink}>
                Login
            </RebassLink>
        }
      </Flex>
    </div>

  )
}

export default Header;

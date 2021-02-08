import React, {Component} from 'react';
import {
  Box,
  Link as RebassLink,
  Flex,
  Text
} from 'rebass';
import {
  Link as RouterLink
} from "react-router-dom";

// user props - one way data flow
class Header extends Component {
  render() {
    const userName = this.props.userName;
    return (
      <div>
        <Flex
          px={3}
          color='white'
          bg='black'
          alignItems='center'>
          <Text p={3} fontWeight='bold'>Hello {userName}, wellcome to React App.</Text>
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
        </Flex>
      </div>
    )
  }
}

export default Header;

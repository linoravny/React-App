import React, {Component} from 'react';

// user props - one way data flow
class Header extends Component {
  render() {
    const userName = this.props.userName;
    return (
      <div>
        <h1>Hello {userName}. This is a React play ground!</h1>
      </div>
    )
  }
}

export default Header;

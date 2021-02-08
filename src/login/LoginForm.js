import React, {Component} from 'react';
import { logIn } from '../actions';
import { useDispatch } from 'react-redux';

// update the state of Form every time a field is changed in the form, and when we submit,
class LoginForm extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);// This binding is necessary to make `this` work in the callback
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.dispatch = useDispatch();
  }


  handleInputChange = (event) => {
    const {name, value} = event.target; //name = email or password fields
  
    //ES6
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    alert('Your email is: ' + this.state.email + '. Your password is:' + this.state.password);
    event.preventDefault();
    
  }

  render() {
    const { email, password } = this.state;

      return (
        // JSX
        <div>
          <h3>Login Form</h3>
          <form>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={this.handleInputChange} />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={this.handleInputChange} />

            <input type="submit" value="Submit" onClick={this.handleSubmit} />
        </form>
      </div>
      )
  }

}

export default LoginForm;

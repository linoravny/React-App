import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../actions';

function LoginForm() {
  const dispatch = useDispatch();
  
  //The state object will contain the email and password values while the setState method is responsible for updating these values.
  const [state , setState] = useState({
    email : "",
    password : ""
  });
  

  const handleInputChange = (e) => {
    const {id , value} = e.target   
    setState(prevState  => ({
      prevState ,
        [id] : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  
    alert('Your email is: ' + state.email + '. Your password is:' + state.password);
    
    dispatch(logIn());
  }


  return (
    // JSX
    <div>
      <h3>Login Form</h3>
      <form >

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email" 
            aria-describedby="emailHelp" 
            name="email"
            placeholder="Enter email" 
            value={state.email}
            onChange={handleInputChange} />

          <label htmlFor="password">Password</label>
          <input
            type="password" 
            id="password" 
            aria-describedby="passwordHelp" 
            name="password"
            placeholder="Enter password"
            value={state.password}
            onChange={handleInputChange} />

          <input type="submit" 
                className="btn btn-primary" 
                value="Submit" 
                onClick={handleSubmit} />
    </form>
  </div>
  )


}

export default LoginForm;

import React, {useState} from 'react';
import { useDispatch } from 'react-redux'; 
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import { Button, Box} from 'rebass';
import { Input, Label } from '@rebass/forms';
import { logIn } from '../actions';

function LoginForm() {
  const dispatch = useDispatch();
  const history = useHistory();

  const validate = values => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length > 5) {
      errors.password = 'Must be 5 characters or less';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));

      dispatch(logIn());
      history.push('/store');
    },
  });

  return (
    // JSX
    <div>
      <h3>Login Form</h3>
      <form onSubmit={formik.handleSubmit}>

        <Box>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email" 
            name="email"
            placeholder="Enter email" 
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}/>
            {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
        </Box>

        <Box>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password" 
            id="password" 
            name="password"
            placeholder="Enter password"
            value={formik.values.password}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange} />
            {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}
        </Box>

        <Box>
          <Button 
            type="submit">
            Submit
          </Button>
        </Box>
    </form>
  </div>
  )


}

export default LoginForm;


  //The state object will contain the email and password values while the setState method is responsible for updating these values.
  // const [state , setState] = useState({
  //   email : "",
  //   password : ""
  // });
  
  // const handleInputChange = (e) => {
  //   const {id , value} = e.target   
  //   setState(prevState  => ({
  //     prevState ,
  //       [id] : value
  //   }))
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  
  //   alert('Your email is: ' + state.email + '. Your password is:' + state.password);
    // if valid...
  //   dispatch(logIn());
  // }

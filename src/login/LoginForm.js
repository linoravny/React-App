import React from 'react';
import { useDispatch } from 'react-redux'; 
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import { Box, Button } from 'rebass';
import { Input } from '@rebass/forms'
import { logIn } from '../actions';

import theme from '../theme.js';
import styled from '@emotion/styled';

function LoginForm() {
  const dispatch = useDispatch();
  const history = useHistory();

  const initialValues = {
    name:'',
    email: '',
    password: ''
  }

  const validate = values => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Required';
    }

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
  }

  const onSubmit = values => {
    console.log(JSON.stringify(values, null, 2));

    dispatch(logIn());
    history.push('/store');
  }

  // with formik hook. formik manage the form state.
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit
  });

  //console.log("form values: " + JSON.stringify(formik.values));


  // const Input = styled.input`
  //     outline: 0;
  //     padding: 0.6rem 1rem;
  //     border: 1px solid rgba(34, 36, 38, 0.15);
  //     border-radius: 3px;
  //     min-width: 280px;
  //     margin: 15px;
  //     &:focus,
  //     &:active {
  //       border-color: #85b7d9;
  //     }
  //     @media (max-width: 778px) {
  //       margin-top: 10px;
  //     }
  // `;

  // const Button = styled.button`
  //   background-color: #2185d0;
  //   color: #ffffff;
  //   text-shadow: none;
  //   background-image: none;
  //   padding: 0.6rem 1.5rem;
  //   margin: 15px;
  //   border-radius: 3px;
  //   cursor: pointer;
  //   @media (max-width: 778px) {
  //     margin-left: 0;
  //     margin-top: 10px;
  //   }
  // `;

  return (
    
    <Box  sx={{  
      width: theme.widthPercentage[8],  
      margin: "auto"
    }}>
      <h3>Login Form</h3>

      <form onSubmit={formik.handleSubmit}>
         <Box>
          <Input
            type="text"
            id="name" 
            name="name"
            autocomple="off"
            placeholder="Enter name" 
            value={formik.values.name}
            onChange={formik.handleChange}/>
            {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
        </Box>

        <Box>
          <Input
            type="email"
            id="email" 
            name="email"
            autocomple="off"
            placeholder="Enter email" 
            value={formik.values.email}
            onChange={formik.handleChange}/>
            {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
        </Box>

        <Box>
          <Input
            type="password" 
            id="password" 
            name="password"
            autocomple="off"
            placeholder="Enter password"
            value={formik.values.password}
            onChange={formik.handleChange} />
            {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}
        </Box>

        <Box>
          <Button type="submit" >
            Submit
          </Button>
        </Box>
    </form>
  </Box>
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

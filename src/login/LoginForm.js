import React from 'react';
import { useDispatch } from 'react-redux'; 
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { logIn, setUser } from '../actions';

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
    dispatch(setUser({name:"lala"}));

    history.push('/store');
  }

  // with formik hook, formik manage the form state.
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit
  });

  //console.log("form values: " + JSON.stringify(formik.values));

  return (
    <div className="container loginForm">
      <h3>Sign In</h3>
      <Container fluid="sm">
        <Row>
          <Col>
            <Form onSubmit={formik.handleSubmit}>

              <Form.Group controlId="formGroupName">
                <Form.Label>Name</Form.Label>
                <Form.Control         
                  type="text"
                  name="name"
                  autocomple="off"
                  placeholder="Enter name" 
                  value={formik.values.name}
                  onChange={formik.handleChange}/>
                  {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
              </Form.Group>

              <Form.Group controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control         
                  type="email"
                  name="email"
                  autocomple="off"
                  placeholder="Enter email" 
                  value={formik.values.email}
                  onChange={formik.handleChange}/>
                  {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
              </Form.Group>

              <Form.Group controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password" 
                  name="password"
                  autocomple="off"
                  placeholder="Enter password"
                  value={formik.values.password}
                  onChange={formik.handleChange} />
                  {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}
              </Form.Group>

              <Button variant="dark" 
                type="submit" 
                className="btn btn-dark btn-lg btn-block">
                Submit
              </Button>

            </Form>
          </Col>
        </Row>
      </Container>
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

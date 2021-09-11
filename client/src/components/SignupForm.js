import React, { useState } from "react";
import { Form, Button, Alert, Container, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutation";

const SignupForm = ({history}) => {
  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [validated] = useState(false);

  const [showAlert, setShowAlert] = useState(false);

  const [addUser] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    const usersFromStorage = localStorage.getItem("zealUsers")
    const zealUsers = usersFromStorage ? JSON.parse(usersFromStorage) : []
    const userExist = zealUsers.filter((user)=>user.email === userFormData.email).length 
    if (!userExist){
      zealUsers.push(userFormData)
      localStorage.setItem("zealUsers", JSON.stringify(zealUsers))
    localStorage.setItem("zealLoggedIn", JSON.stringify(userFormData))
    history.push("/home")
    } else {
      alert ("user already exist")
    return
    }



    
    // try {
    //   const data = await addUser({
    //     variables: { ...userFormData },
    //   });
    //   console.log (data)
    //   const { token } = data;
    //   Auth.login(token);
    // } catch (err) {
    //  alert("something went wrong")
    //  console.log(err)
    // }

    setUserFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
     <section class="d-flex flex-column align-items-center justify-content-center title" >
    <h1>Welcome to <span id="zeal">ZEAL</span>!</h1>
    <h2> Create your account.</h2>
  </section>
      
     <Container className= "login bg" id="login">
      <Row>
        <Col>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="danger"
        >
          Something went wrong with your signup!
        </Alert>

        <Form.Group>
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your username"
            name="username"
            onChange={handleInputChange}
            value={userFormData.username}
            required
          />
          <Form.Control.Feedback type="invalid">
            Username is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Your email address"
            name="email"
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type="invalid">
            Email is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Your password"
            name="password"
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type="invalid">
            Password is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Button
          disabled={
            !(
              userFormData.username &&
              userFormData.email &&
              userFormData.password
            )
          }
          type="submit"
          variant="success"
        >
          Submit
        </Button>
        <div>

          <p>Already have a account?
            <Link to = "/" > Login</Link>
          </p>
        </div>
      </Form>
      </Col>
      </Row>
      </Container>
    
      
    </>
  );
};

export default SignupForm;

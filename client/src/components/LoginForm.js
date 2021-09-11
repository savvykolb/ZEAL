import React, { useState } from "react";
import { Form, Button, Alert, Container, Row, Col } from "react-bootstrap";
import {Link} from "react-router-dom";
import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutation";

const LoginForm = ({history}) => {
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [login] = useMutation(LOGIN_USER);

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
    const userExist = zealUsers.filter((user)=>user.email === userFormData.email) 
    if (!userExist.length){
      alert("User Not Registered...Please Create a Account")

    history.push("/signup")
    } else {
      if (userExist[0].password === userFormData.password){
        localStorage.setItem("zealLoggedIn", JSON.stringify(userFormData))
      history.push("/home")    
      }else {
        alert ("invalid Password")
      }
      return
    }

    // try {
    //   const { data } = await login({
    //     variables: userFormData,
    //   });

    //   const { token } = await data.login;
    //   Auth.login(token);
    // } catch (err) {
    //   console.log(`Error: ${err}`);
    //   setShowAlert(true);
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
    <h2> Please login to you account.</h2>
  </section>
    <Container className="login bg" id="login">
  <Row>
    <Col>
    
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="danger"
        >
          Something went wrong with your login credentials!
        </Alert>
        <Form.Group>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control id="placeholder"
            type="text"
            placeholder="Your email"
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
          disabled={!(userFormData.email && userFormData.password)}
          type="submit"
          variant="success"
        >
          Submit
        </Button>
        <div>
          <p>Not yet registered?
            <Link to = "/signup" > Create a Account</Link>
          </p>
        </div>
      </Form>
      </Col>
      </Row>
      </Container>
    </>
  );
};

export default LoginForm;

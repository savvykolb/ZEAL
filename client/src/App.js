import React from 'react';
import Homescreen from './pages/Homescreen';

// import { Navbar } from 'react-bootstrap';
import NewProjectForm from './components/NewProjectForm';
import AppNavbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import ProjectPage from './pages/ProjectPage';

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
    <div>
      <AppNavbar/>
      {/* <LoginForm/> */}
      {/* <NewProjectForm/> */}
     <Route exact path = "/" component = {LoginForm} />
     <Route path = "/signup" component = {SignupForm} exact />
     <Route path = "/home" component = {Homescreen} exact />
     <Route path = "/project" component = {ProjectPage} exact />
    </div>
    </Router>
     </ApolloProvider>
  );
}

export default App;

//NOT COMPLETE

import React from 'react';
// import { Navbar } from 'react-bootstrap';
import AppNavbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import LoginForm from './components/LoginForm';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

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
      <LoginForm/>
    </div>
    </Router>
     </ApolloProvider>
  );
}

export default App;

//NOT COMPLETE
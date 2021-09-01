const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    password: String
    projects: [Project]!
  }

  type Project {
    _id: ID
    projectDescription: String
    projectAuthor: String
    createdAt: String
    projectName: String
    dueDate: Int
    userID: ID!
  }

<<<<<<< HEAD
  type Tasks {
    _id: ID
    tasksDescription: String
    tasksAuthor: String
    tasksName: String
    tasksPriority: String
    tasksStatus: String
    dueDate: Int
    userID: ID!
  }

=======
>>>>>>> 7b5534c475ed2d52f94e73a756b5f0357bc982af
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    projects(username: String): [Project]
    project(projectId: ID!): Project
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addProject(projectText: String!): Project
    removeProject(projectId: ID!): Project
  }
   `;

module.exports = typeDefs;
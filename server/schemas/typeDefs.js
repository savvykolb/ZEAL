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
    projectUsers: [User]
    createdAt: String
    projectName: String
    dueDate: Int
  }

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

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    projects(username: String): [Project]
    project(projectId: ID!): Project
    up(projectName: String): [User]
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addProject(projectDescription: String): Project 
    addTasks(tasksDescription: String!): Tasks
    removeProject(projectId: ID!): Project
  }
   `;

module.exports = typeDefs;

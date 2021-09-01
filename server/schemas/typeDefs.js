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
    dueDate: Date
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
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addProject(projectText: String!): Project
    removeProject(projectId: ID!): Project
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    tasks: [Tasks]!
  }

  type Tasks {
    _id: ID
    tasksDescription: String
    tasksAuthor: String
    tasksName: String
    tasksPriority: String
    tasksStatus: String
    dueDate: Date
    userID: ID!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    tasks(username: String): [Tasks]
    tasks(tasksId: ID!): Tasks
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addTasks(TasksText: String!): Tasks
    removeTasks(TasksId: ID!): Tasks
  }
   `;

module.exports = typeDefs;
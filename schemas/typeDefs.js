const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    password: String
    projects: [Project]
  }

  type Project {
    _id: ID
    projectDescription: String
    projectAuthor: String
    projectTeam: [String]
    createdAt: String
    projectName: String
    dueDate: Int
    projectTasks: [Tasks]
  }

  type Tasks {
    _id: ID
    tasksDescription: String
    tasksName: String
    tasksPriority: String
    dueDate: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user(username: String!): User
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addProject(projectDescription: String, projectName: String, projectTeam: String, dueDate: Int  ): Project 
    removeProject(projectId: String): Project
    addTasks(projectId: String, tasksDescription: String, tasksPriority: String, dueDate: Int, tasksName: String): Tasks
  }
   `;

module.exports = typeDefs;

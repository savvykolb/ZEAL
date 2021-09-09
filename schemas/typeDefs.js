const { gql } = require('apollo-server-express');

// We need to access all projects associated with specific usernames. 
    //We set up type defs to do this (we think) but are missing the associations/populate?
      // We tried adding into Project.js model the association (used WK18 activity14 for reference)
          // I am thinking we are missing the connecting piece within resolvers, but we are not sure how to do this. 

          //Essentially, we need this query to work in order to access all info in projects AND users. 
            // We will need something to model to get Tasks to work. If time - this would be helpful too. 

            //This was the query we used in the playground that Noah said would work if we did our associations correctly.
            //query {
//                 project(projectId: "6137f042dce4d04aa6e478d1"){
//                     user{
//                        username
//                  }
//                }
//             }

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
    projectTeam: [String]
    projectTasks: [Tasks]
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
    dueDate: Int
    userID: ID!
    projectID: ID!
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
    addTasks(tasksDescription: String!): Tasks
    removeProject(projectId: ID!): Project
  }
   `;

module.exports = typeDefs;

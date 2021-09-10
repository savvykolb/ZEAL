//NOTE AT BOTTOM
import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_PROJECT = gql`
mutation addProject($projectDescription: String, $projectName: String, $projectTeam: String, $dueDate: Int) {
  addProject(projectDescription: $projectDescription, projectName: $projectName, projectTeam: $projectTeam, dueDate: $dueDate) {
    _id
    projectDescription
    projectAuthor
    projectTeam
    createdAt
    projectName
    dueDate
    projectTasks {
      _id
      tasksDescription
      tasksAuthor
      tasksName
      tasksPriority
      userID
      projectID
    }
  }
}
`;

export const ADD_TASKS = gql`
mutation addTasks($tasksDescription: String!) {
  addTasks(tasksDescription: $tasksDescription) {
    _id
    tasksDescription
    tasksAuthor
    tasksName
    tasksPriority
    userID
    projectID
  }
}
`;

export const REMOVE_PROJECT = gql`
mutation removeProject($projectId: ID!) {
  removeProject(projectId: $projectId) {
    _id
    projectDescription
    projectAuthor
    projectTeam
    createdAt
    projectName
    dueDate
    projectTasks {
      _id
      tasksDescription
      tasksAuthor
      tasksName
      tasksPriority
      userID
      projectID
    }
  }
}
`;


//SAVE-PROJECTS/TASKS AND REMOVE-PROJECTS/TAASKS CAN BE ADDED;THIS IS NOT FINAL 9/1 3:20PM
//ADD FROM MUTATIONS INCLUDING TASKS 9/1 8:20PM
//mutations for addProject, addTasks, and removeProject taken from end line of 'typeMutation'
//still not sure about 'dueDate'
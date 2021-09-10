//NOTE AT BOTTOM
import { gql } from "@apollo/client";

export const GET_ME = gql`
query me {
    me {
        _id
        username
        email
        password
        projects {
            _id
            projectDescription
            projectAuthor
            projectTeam           
            createdAt
            projectName
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
}
`;

//Would like to know how we plan on setting this up based of our typedefs 9/1 3:40pm
//Dont think we need 'due date' because its an integer(for 'project' or 'tasks'); also not sure if we need 'createdAt'
//still not sure about "due date" 9/10 11:10AM
import React, { useState } from "react";
// import { useMutation } from "@apollo/client";
// import { LOGIN_USER } from "../utils/mutation";

const NewProjectForm = () => {
//     const [projectForm, setProjectForm] = useState({
//         projectName: "",
//         projectDescription: "",
//         dueDate: "",
//         allTeams: []
//     })

    // used LoginForm to model
    // const handleInputChange = (event) => {
    //     const { projectName, value } = event.target;
    //     setProjectForm({ ...projectForm, [projectName]: value });

        //The start of the put function for form -> Not sure how to complete
        // We will need a put and post function here
        //Not quite sure how to do this
        //I believe this is when we utilize our mutations

        return (
            <div className='mx-auto col-md-8 col-sm-12'>
                <div className='container'>
                    <div className='row mt-5'>
                        <div className='col-md-12 mx-auto'>
                            <h2>Project Title and Teams</h2>
                            <form>
                                <label htmlFor='projectName'>Project Title:</label>
                                <input
                                    type='text'
                                    name='projectName'
                                    className='form-control'
                                    id='projectName'
                                    placeholder='Project Title'
                                    onChange={this.handleChange.bind(this)}
                                />
                                <label htmlFor='ProjectDescription'>Project Description:</label>
                                <input
                                    type='text'
                                    name='projectDescription'
                                    className='form-control'
                                    rows="5"
                                    id='projectDescription'
                                    placeholder='Project Description'
                                    onChange={this.handleChange.bind(this)}
                                />
                                <br />
                                <label htmlFor='TeamName1'>Team Name 1:</label>
                                <input
                                    type='text'
                                    name='TeamName1'
                                    className='form-control'
                                    id='TeamName1'
                                    placeholder='Team Name 1'
                                    onChange={this.handleChange.bind(this)}
                                />
                                <br />
                                <label htmlFor='TeamName2'>Team Name 2:</label>
                                <input
                                    type='text'
                                    name='TeamName2'
                                    className='form-control'
                                    id='TeamName2'
                                    placeholder='Team Name 2'
                                    onChange={this.handleChange.bind(this)}
                                />
                                <br />
                                <button onClick={console.log('CLICKED!! continue adding collaborators')}>  {/* //newProject => props.createProject */}
                                    {/* Continue on To Adding collaborators */}
                                </button>
                                <br />
                                <button type="button" onClick={() => this.handleNewProject()}>Create Project</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
// };


export default NewProjectForm
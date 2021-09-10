import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function CreateTeam({history}) {
    const [projectName, setProjectName] = useState("");
    const [projectDescription, setProjectDescription] = useState("");
    const [team, setTeam] = useState([]);
    const [newMember, setNewMember] = useState("");
    const [dueDate, setDueDate] = useState("");

    const addTeamMember = () => {
        const updateTeam = [...team, newMember]
        setTeam(updateTeam);
        setNewMember("")
    }
    const submitForm = (e) => {
        e.preventDefault()
        if (!projectName || !projectDescription || !team.length || !dueDate){
            alert("please Fill in all required information")
            return
        }
        
        const data = {projectName, projectDescription, team, dueDate}
        console.log(data)
        //send post request to the server to save the data to the database temp
        const projectsFromStorage = localStorage.getItem("projectData")
        if (projectsFromStorage){
            const projects = JSON.parse(projectsFromStorage);
            projects.push(data);
            localStorage.setItem("projectData", JSON.stringify(projects))

        } else{
            const projects = [data];
            localStorage.setItem("projectData", JSON.stringify(projects))
        }
        history.push("/project");

    }


    return (
        <div>
            <div className="d-flex min-vh-100">
                <div className="container-fluid my-auto d-flex flex-column w-75">
                    <h1 id="head" className="display-3 text-center">Setup Project</h1>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-9 p-4 bg-dark">
                            <form className="row" onSubmit= {submitForm}>

                                <div className="projectText">
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Project Name</label>
                                        <input type="text" className="form-control" value={projectName} onChange={(e) => setProjectName(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" />

                                    </div>
                                    <div className="projectText">
                                        <div className="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Project Description</label>
                                            <input type="text" className="form-control" value={projectDescription} onChange={(e) => setProjectDescription(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label for="name" className="form-label">Add Team member Name</label>
                                        <input type="text" className="form-control" value={newMember} onChange={(e) => setNewMember(e.target.value)} id="exampleInputPassword1" />
                                        <input type="button" className=" form-control bg-secondary" id="addTeamButton" value= "Add Team Member" onClick={addTeamMember} />
                                    </div>

                                    <div id="dates" className="form-group col-md-6">
                                        <label for="bday-month">Select Due Date:</label>
                                        <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} id="inputBday" name="trip-start" max="2030-12-31" />
                                        <div>
                                            {team.map((member, i) => {
                                                return <p key={i} >{member}</p>
                                            })}
                                        </div>
                                    </div>
                                </div>

                                <div id="buttons">
                                    <button type="submit" className="btn btn-primary bg-secondary">Submit</button>
                                    <button type="button" className="btn btn-primary bg-secondary">Reset</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col-12 mt-3 text-center">

                    </div>
                </div>
            </div>
        </div>

    )
}

export default CreateTeam;

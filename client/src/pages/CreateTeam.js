import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function CreateTeam() {
    return (
        <div>
            <div className="d-flex min-vh-100">
                <div className="container-fluid my-auto">
                    <h1 id="head" className="display-3 text-center">Setup Project</h1>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-9 p-4 bg-dark">
                            <div className="row">

                                <div className="projectText">
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Project Name</label>
                                        <input type="input" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>

                                    </div>
                                    <div className="projectText">
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Project Description</label>
                                            <input type="input" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="name" class="form-label">Add Team member Name</label>
                                        <input type="input" className="form-control" id="exampleInputPassword1"></input>
                                    </div>
                                   
                                    <div id="dates"className="form-group col-md-6">
                                        <label for="bday-month">Select Due Date:</label>
                                        <input type="date" id="inputBday" name="trip-start" max="2030-12-31"></input>
                                        <div>Team placeholder</div>
                                        </div>
                                        </div>
                                       
                                   <div id= "buttons">
                                    <a href="./project"><button type="submit" className="btn btn-primary">Submit</button></a>
                                    <a href="./create"><button type="submit" className="btn btn-primary">Reset</button></a>
                               </div>
                                </div>
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

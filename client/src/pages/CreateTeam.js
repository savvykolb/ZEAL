import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function CreateTeam() {
    return (
        <div>
            <div className="d-flex min-vh-100">
                <div className="container-fluid my-auto">
                    <h1 id="head"className="display-3 text-center">Setup Project</h1>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-9 p-4 bg-dark">
                            <div className="row">

                                <div className="projectText">
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Project Name</label>
                                        <input type="input" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>

                                    </div>
                                    <div class="mb-3">
                                        <label for="name" class="form-label">Add Team member Name</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1"></input>
                                    </div>

                                    <a href="./project"><button type="submit" className="btn btn-primary">Submit</button></a>
                                        <div>Place Holder for list of team names </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 mt-3 text-center">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateTeam;

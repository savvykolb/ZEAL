import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
function ProjectPage() {
  return (
    <div className="d-flex min-vh-100 bg-dark">
      <div className="container-fluid my-auto">
        <h1 className="display-2 text-center text-light">Project Name</h1>
        <div className="row justify-content-center">

          <div className="col-12 col-md-10 mb-3 p-4 bg-white">
            <form>


              <div className="form-group">
                <label for="exampleFormControlSelect2">Add Task</label>
                <textarea multiple class="form-control" id="exampleFormControlSelect2">
                </textarea>
              </div>
              <div className="drop">
                <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Team Name
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>

                <div class="dropdown">
                  <a className="btn btn-secondary dropdown-toggle" href="#" role="button"
                    id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Task Priority
                  </a>

                  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
              </div>

              <button id= "add"type="submit" className="btn btn-primary">Add Task</button>

            </form>

            <form>
                <div id= "added"class="form-group">
                <label for="exampleFormControlSelect2">My Task</label>
                <select multiple class="form-control" id="exampleFormControlSelect2">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div class="form-group">
                <label for="exampleFormControlSelect2">Team Task</label>
                <select multiple class="form-control" id="exampleFormControlSelect2">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div class="form-group">
                <label for="exampleFormControlSelect2">Unassigned Task</label>
                <select multiple class="form-control" id="exampleFormControlSelect2">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>





              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>





          <div className="col-12 text-center">
      //subject to update//
            <h6><a href="./home">&larr; Go Back</a></h6>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ProjectPage

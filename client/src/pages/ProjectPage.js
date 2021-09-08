import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
function ProjectPage() {
    return (
        <div className="d-flex min-vh-100 bg-dark">
    <div className="container-fluid my-auto">
      <h1 className="display-2 text-center text-light">Project Screen</h1>
      <div className="row justify-content-center">
        
        <div className="col-12 col-md-10 mb-3 p-4 bg-white">
          <form>
         
           
            <div className="form-group">
              <label for="exampleFormControlSelect2">My Task</label>
              <textarea multiple class="form-control" id="exampleFormControlSelect2">

              </textarea>
            </div>
            <div className="form-group">
              <label for="exampleFormControlSelect2">Team Task</label>
              <textarea multiple class="form-control" id="exampleFormControlSelect2">

              </textarea>
            </div>
            <div className="form-group">
              <label for="exampleFormControlSelect2">Unassigned Task</label>
              <textarea multiple class="form-control" id="exampleFormControlSelect2">

              </textarea>
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

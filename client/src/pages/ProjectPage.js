import React from 'react'

function ProjectPage() {
    return (
        <div ClassName="d-flex min-vh-100 bg-dark">
    <div ClassName="container-fluid my-auto">
      <h1 ClassName="display-2 text-center text-light">Project Screen</h1>
      <div ClassName="row justify-content-center">
        
        <div ClassName="col-12 col-md-10 mb-3 p-4 bg-white">
          <form>
         
           
            <div ClassName="form-group">
              <label for="exampleFormControlSelect2">My Task</label>
              <textarea multiple class="form-control" id="exampleFormControlSelect2">

              </textarea>
            </div>
            <div ClassName="form-group">
              <label for="exampleFormControlSelect2">Team Task</label>
              <textarea multiple class="form-control" id="exampleFormControlSelect2">

              </textarea>
            </div>
            <div ClassName="form-group">
              <label for="exampleFormControlSelect2">Unassigned Task</label>
              <textarea multiple class="form-control" id="exampleFormControlSelect2">

              </textarea>
            </div>
            
           

           
            <button type="submit" ClassName="btn btn-primary">Submit</button>
          </form>
        </div>





        <div ClassName="col-12 text-center">
      //subject to update//
          <h6><a href="./index.html">&larr; Go Back</a></h6>
        </div>
      </div>
    </div>
  </div>

    )
}

export default ProjectPage

import React from 'react'

function Homescreen() {
    return (
        <div>
            <div ClassName="d-flex min-vh-100">
    <div ClassName="container-fluid my-auto">
      <h1 ClassName="display-3 text-center">Your Projects</h1>
      <div ClassName="row justify-content-center">
        <div ClassName="col-12 col-md-9 p-4 bg-dark">
          <div ClassName="row">
            <div ClassName="col-12 col-md-4 ">
              <i ClassName="fas fa-plus"></i>
              <i ClassName="bi bi-plus"></i>
            
              <a href="./component-navbar.html" ClassName="btn btn-block p-3 my-2 btn-secondary">
              <span>&#43;</span>
              <h3>Add Projects</h3>
              </a>
            </div>
           
          </div>
        </div>
       
        <div ClassName="col-12 mt-3 text-center">
         
        </div>
      </div>
    </div>
  </div>    
        </div>
    )
}

export default Homescreen

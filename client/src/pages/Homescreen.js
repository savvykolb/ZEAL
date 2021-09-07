import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Homescreen() {
    return (
        <div>
            <div className="d-flex min-vh-100">
    <div className="container-fluid my-auto">
      <h1 className="display-3 text-center">Your Projects</h1>
      <div className="row justify-content-center">
        <div className="col-12 col-md-9 p-4 bg-dark">
          <div className="row">
            <div className="col-12 col-md-4 ">
              <i className="fas fa-plus"></i>
              <i className="bi bi-plus"></i>
            
              <a href="./component-navbar.html" className="btn btn-block p-3 my-2 btn-secondary">
              <span>&#43;</span>
              <h3>Add Projects</h3>
              </a>
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

export default Homescreen

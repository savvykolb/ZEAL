import React,{useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom"
function Homescreen() {
    const [projects, setProjects] = useState([])
//dependent array line 9...empty array
    useEffect(()=>{
const projectsFromStorage = localStorage.getItem("projectList")
console.log(projectsFromStorage)
if (projectsFromStorage) {
  setProjects(JSON.parse(projectsFromStorage))
}
    },[])




  return (
    <div>
      <div className="d-flex min-vh-100">
        <div className="container-fluid my-auto d-flex flex-column w-75">
          <h1 id ="home-title" className="display-3 text-center">Your Projects</h1>
          <div className="row bg-dark ">
       
             
                <div className="col-12 col-md-6 col-lg-4 ">
                  <i className="fas fa-plus"></i>
                  <i className="bi bi-plus"></i>

                  <Link to="/create" className="btn btn-block p-3 my-2 btn-secondary">
                    <span className="plus">&#43;</span>
                    <h3>Add Projects</h3>
                  </Link>
                </div>
                {projects.map((project, i )=>{
                    return <div key = {i} className="col-12 col-md-6 col-lg-4 bg-secondary m-2">
               <h3>{project.name}</h3>
                  <h5>{project.dueDate}</h5>
                  <p>{project.description}</p>
                </div>
                })}
           
          
            

            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homescreen;

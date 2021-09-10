import React,{useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Homescreen() {
    const [projects, setProjects] = useState([])
//dependent array line 9...empty array
    useEffect(()=>{
const projectsFromStorage = localStorage.getItem("projectData")
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
       
             
                <div className="col-12 col-md-4 ">
                  <i className="fas fa-plus"></i>
                  <i className="bi bi-plus"></i>

                  <a href="./create" className="btn btn-block p-3 my-2 btn-secondary">
                    <span className="plus">&#43;</span>
                    <h3>Add Projects</h3>
                  </a>
                </div>
                
                <div className="col-12 col-md-4">
hello
            </div>
          
            

            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homescreen;

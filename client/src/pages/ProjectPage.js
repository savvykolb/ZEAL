import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function ProjectPage() {
const [allTask, setAllTask] = useState([])
  const [priority, setPriority] = useState("")
 const [task, setTask] = useState("")
 const [teamMember, setTeamMember] = useState("")
  const [project, setProject] = useState({})
  useEffect(() => {
    const projectsFromStorage = JSON.parse(localStorage.getItem("projectData"))
    console.log(projectsFromStorage)
    const index = projectsFromStorage.length - 1
    setProject(projectsFromStorage[index])
  }, [])
  const addTask= ()=>{
    if (!priority || !teamMember || !task){
      alert ("please fill in the information")
      return
    }
   const updatedTask= [...allTask, {task, teamMember, priority}] 
   setAllTask(updatedTask)
   setTask("")
    setTeamMember("")
    setPriority("")
   
  }


  return (

    <div className="container-fluid my-auto">
      <h1 className="display-2 text-center">{project.projectName}</h1>
      <div className="text row justify-content-center">

        <div id="text" className="col-12 col-md-10 mb-3 p-4 bg-dark">
          <form>

            <div className="date">Description: {project.projectDescription}</div>
            <div className="date">Due Date:{project.dueDate}</div>
            <div className="form-group">
              <label for="exampleFormControlSelect2">Add Task</label>
              <textarea multiple class="form-control" id="exampleFormControlSelect2" value= {task} onChange= {(e)=>setTask(e.target.value)}>
              </textarea>
            </div>
            <div className="drop row ">
              <div className="input-group mb-3 col-12 col-md-6">
               
                <select class="custom-select" onChange= {(e)=>setTeamMember(e.target.value)} id="inputGroupSelect01">
                  <option selected>Choose a Team Member</option>
                  {project.team && project.team.map((member, i)=>{
                    return <option key= {i} value= {member}>{member}</option>
                  })}
                </select>
              </div>
              <div class="input-group mb-3 col-12 col-md-6">
               
                <select class="custom-select" onChange= {(e)=>setPriority(e.target.value)} id="inputGroupSelect01">
                  <option selected>Select Priority</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>
            </div>

            <button id="add" type="button" onClick={addTask} className="btn btn-primary bg-secondary">Add Task</button>

          </form>

          <form>
            <div id="added" class="form-group">
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





            <button type="submit" className="btn btn-primary bg-secondary">Submit</button>
            <div className="col-12 text-center">

              <h6><a href="./create">&larr; Go Back</a></h6>
            </div>
          </form>
        </div>






      </div>
    </div>


  )
}

export default ProjectPage

import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function ProjectPage({history}) {

  const [unassigned, setUnassigned] = useState([])
 const [loggedIn,setLoggedIn] = useState({})
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


    const userFromStorage = localStorage.getItem("zealLoggedIn")
    if (!userFromStorage){
      history.push("/")
    }else{
      setLoggedIn(JSON.parse(userFromStorage))
    }

  }, [])
  const addTask= ()=>{
    if (!priority || !task){
      alert ("please fill in the information")
      return
    }
   if (!teamMember) {
     const updated = [...unassigned, {task,priority}]
     setUnassigned(updated)
   } else {
    const updatedTask= [...allTask, {task, teamMember, priority}] 
    setAllTask(updatedTask)
   }
   setTask("")
    setTeamMember("")
    setPriority("")
   
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    const newProject = {
      name: project.projectName,
      description: project.projectDescription,
      team: project.team,
      dueDate: project.dueDate,
      unassignedTask: unassigned, 
      assignedTask: allTask,
    }
    const projectsFromStorage = (localStorage.getItem("projectList"))
    if (projectsFromStorage) {
      const projectList = JSON.parse(projectsFromStorage)
      projectList.push(newProject)

      localStorage.setItem("projectList",JSON.stringify(projectList))
    }else{
      localStorage.setItem("projectList",JSON.stringify([newProject]))
    }
   history.push("/home")
  }


  return (

    <div className="container-fluid my-auto">
      <h1 className="display-2 text-center">{project.projectName}</h1>
      <div className="text row justify-content-center">

        <div id="text" className="col-12 col-md-10 mb-3 p-4 bg-dark">
          <form onSubmit= {handleSubmit}>

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

          

        
            
            <div class="form-group">
              <label for="exampleFormControlSelect2">Team Task</label>
              <ul>
                {allTask.map ((item,i)=>{
                   return <li style={{backgroundColor: item.priority === "high" ? "red" : item.priority === "medium" ? "yellow" : "green"}} key= {i}>{item.teamMember}- {item.task}</li> 
                })}
              </ul>
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect2">Unassigned Task</label>
              <ul>
                { unassigned.map ((item,i)=>{
                   return <li style={{backgroundColor: item.priority === "high" ? "red" : item.priority === "medium" ? "yellow" : "green"}} key= {i}>{item.task}</li> 
                })}
              </ul>
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

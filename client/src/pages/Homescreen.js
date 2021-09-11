import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom"

function Homescreen() {
  const [projects, setProjects] = useState([])
  const [users, setUsers] = useState([])
  //dependent array line 9...empty array
  useEffect(() => {
    const projectsFromStorage = localStorage.getItem("projectList")
    console.log(projectsFromStorage)
    if (projectsFromStorage) {
      setProjects(JSON.parse(projectsFromStorage))
    }
  }, [])

  useEffect(() => {
    const usersFromStorage = localStorage.getItem("zealLoggedIn")
    console.log(usersFromStorage)
    if (usersFromStorage) {
      setUsers(JSON.parse(usersFromStorage))
    }
  }, [])




  return (
    <div>
      <section className="d-flex flex-column align-items-center justify-content-center title" >
        <h1>Welcome Back  <span id="zeal"> {users.username}</span>!</h1>
        <h2> Please login to you account.</h2>

        <div className="row container ">


        <div >
        <i className="fas fa-plus"></i>
        <i className="bi bi-plus"></i>

        <Link to="/create" className="btn btn-block p-3 my-2 btn-secondary" id="addProject">
        <span className="plus">&#43; </span>
        <h3>Add Projects</h3>
        </Link>
        </div>
      {projects.map((project, i) => {
        return (
          <div className="row container" key = {i}>
        <Card style={{ width: '100rem' }}>
        <Card.Header className="d-flex flex-column align-items-center justify-content-center projectTitle">{project.name}</Card.Header>
      <br></br>
        <Card.Text className="d-flex flex-column align-items-center justify-content-center">
      {project.description}
        </Card.Text>
        <Card.Text className="d-flex flex-column align-items-center justify-content-center">
      {project.dueDate}
        </Card.Text>
        </Card>
      </div>
        )},
      )},
        </div>
        </section>
  </div>
  )}

export default Homescreen;

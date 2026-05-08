import { useState } from 'react'
import Form from './components/Form'
import Projects from './components/Projects'
import './App.css'

function App() {
  const [projects, setProjects] = useState([])
  const [ searchWord, setSearchWord ] = useState("")

  const addProject = (newProject) => {
    setProjects(prev => [...prev, newProject])
    // console.log(projects);
  }

  const handleSearch = searchWord !== "" ? projects.filter(project => project.title.toLowerCase().includes(searchWord.toLowerCase())) : projects
  

  // console.log(searchWord);

  return (
    <>
      <h1>Portfolio platform</h1>
      <Form addProject={addProject}/>
      <Projects projects={handleSearch} setSearchWord={setSearchWord}/>
    </>
  )
}

export default App

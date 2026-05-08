import { useState } from "react"

export default function Form({ addProject }) {
    const [title , setTitle] = useState("")
    const [description, setDescription] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()

        const newProject= {
            id: Date.now(),
            title,
            description
        }
        addProject(newProject)

        setTitle("")
        setDescription("")
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <h1>Add Project</h1>
            <label>Title</label>
            <br />
            <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <br />
            <br />
            <label>Description</label>
            <br />
            <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
            <br />
            <br />
            <button type="submit">Add</button>
        </form>
        </>
    )
}
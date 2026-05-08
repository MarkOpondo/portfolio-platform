import { useState } from "react"
import { Button } from "@mui/material"
import {TextField} from "@mui/material"

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
            {/* <label>Title</label> */}
            <br />
            <TextField   
                label="Title" 
                sx={{ 
                    input: { color: 'white' }, 
                    "& .MuiInputLabel-root": { color: 'white' }, // Changes label color
                    "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "white" }, // Changes border color
                    }
                }}  
                id="outlined-basic" 
                variant="outlined" 
                type="text" 
                name="title" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
                />
            <br />
            <br />
            {/* <label>Description</label> */}
            <br />
            <TextField 
                label="Description"
                sx={{ 
                    input: { color: 'white' }, 
                    "& .MuiInputLabel-root": { color: 'white' }, // Changes label color
                    "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "white" }, // Changes border color
                    }
                }}  
                id="outlined-basic" 
                variant="outlined" 
                type="text" 
                name="description" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)}
                />
            <br />
            <br />
            <Button variant="contained" type="submit">Add</Button>
            <br />
            <br />
        </form>
        </>
    )
}
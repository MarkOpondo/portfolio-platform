import { TextField } from "@mui/material"

export default function Search({ setSearchWord }) {

    return (
        
    <form>
        <TextField 
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
            label="Search Projects" 
            onChange={(e) => setSearchWord(e.target.value)}
        />
    </form>
        
    )
}
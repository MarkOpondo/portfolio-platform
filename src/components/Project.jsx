import { Card, CardContent, Typography } from "@mui/material"


export default function Project( { project } ) {
    return (
        <Card sx={{ 
            width: "70vw", 
            alignSelf: "center", 
            margin: "2rem",
            backgroundColor: "black"
            }}>
            <CardContent>
            <Typography variant="h2">{project.title}</Typography>
            <Typography 
                variant="body2"
                sx={{ fontSize: "1.5rem"}}
                >
                    {project.description}
            </Typography>                
            </CardContent>

        </Card>
    )
}
import Project from "./Project"
import Search from "./Search"

export default function Projects({ projects, setSearchWord }) {
    return (
        <>
        <Search setSearchWord={setSearchWord}/>
        {projects.map((project) => (<Project key={project.id} project={project}/>))}
        </>
    )
}
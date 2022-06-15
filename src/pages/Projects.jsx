import { useState } from "react";
import { useEffect } from "react";

const Projects = ({URL}) => {

    const [projects, setProjects] = useState([]);

    const getProjects = async () => {
        const response = await fetch(URL + 'projects');
        const data = await response.json();
        setProjects(data);
    };



    useEffect(() => {
        getProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

   
    const loaded = projects.map((project, index) =>  {
        const {name, image, git, live} = project;
        return(
        <div className="projects" key={index}>
            <h1>{name}</h1>
            <img src={image} alt="screenshot"></img>
            <a href={git}>
            <button>Github</button>
            </a>
            <a href={live}>
            <button>Live Site</button>
            </a>
        </div>
        )
    })

    return  projects ? loaded :  <h1>Loading...</h1> 
}

export default Projects;
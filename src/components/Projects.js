import { useEffect} from "react";


const Projects = ()=> {
    //const [projectData, setProjectData] = useState([]);

    useEffect(() => {
        console.log('Fetching API Data')
    }, []);


    
    return(
        <div>
            <h1>Here are some of my projects</h1>
            <div id="projectResults">
            <a href="https://github.com/jda10/condo-site"><img src="https://gh-card.dev/repos/jda10/condo-site.svg" alt="Github Project Card"></img></a>
            <a href="https://github.com/jda10/condo-site"><img src="https://gh-card.dev/repos/jda10/react-drawing-app.svg" alt="Github Project Card"></img></a>
            <a href="https://github.com/jda10/react-dice-roll"><img src="https://gh-card.dev/repos/jda10/react-dice-roll.svg" alt="Github Project Card"></img></a>
            <a href="https://github.com/jatchley10/Employee-Registration-Web-App"><img src="https://gh-card.dev/repos/jatchley10/Employee-Registration-Web-App.svg" alt="Github Project Card"></img></a>
            <a href="https://github.com/jda10/condo-site"><img src="https://gh-card.dev/repos/jda10/react-drawing-app.svg" alt="Github Project Card"></img></a>
            </div>
        </div>
    )
}


export default Projects;
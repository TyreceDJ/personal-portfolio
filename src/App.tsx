import ExperiencesSection from './sections/experiencesSection/experiences';
import ProjectsSection from './sections/projectsSection/projects';
import LandingSection from './sections/landingSection/landing';
import NavBarSection from './sections/navbarSection/navbar';
import './styles.css';

function App() {
    return (
        <div className="App">
            <NavBarSection/>
            <LandingSection/>
            <ProjectsSection/>
            <ExperiencesSection/>
        </div>
    );
}

export default App;

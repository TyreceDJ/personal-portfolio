import ExperienceSection from './section/experience/experienceSection';
import ProjectSection from './section/project/projectSection';
import LandingSection from './section/landing/landingSection';
import NavBarSection from './section/navbar/navbarSection';
import './styles.css';

function App() {
	return (
		<div className='App'>
			<NavBarSection/>
			<LandingSection/>
			<ProjectSection/>
			<ExperienceSection/>
		</div>
	);
}

export default App;

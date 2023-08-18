import { CardInfo } from '../../component/cardInfo/cardInfo';
import { CardInfoConstants } from './projectsConstants';
import './projectStyle.css';

function ProjectSection() {
	return (
		<>
			<h1 className='heading'>Projects</h1>
			<div id='projects'>
				{CardInfoConstants.map((cardDetails, idx) => <CardInfo key={idx} {...cardDetails}/>)}
			</div>
		</>
	);
}

export default ProjectSection;
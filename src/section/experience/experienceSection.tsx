import { Card } from '../../component/card/card';
import { experienceInfoList } from './experienceConstants';
import './experienceStyle.css';

function ExperienceSection() {
	return (
		<>
			<h1 className='heading'>Experience</h1>
			<div className='grid2'>
				{experienceInfoList.map((experienceInfo, idx) => <Card {...experienceInfo} key={idx}/>)}
			</div>
		</>
	);
}

export default ExperienceSection;
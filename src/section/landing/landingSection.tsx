import { Card } from '../../component/card/card';
import { landingInfoList } from './landingConstants';
import './landingStyle.css';

function LandingSection() {
	return (
		<div className='grid' id='landing'>
			{landingInfoList.map((landingInfo, idx) => <Card {...landingInfo} key={idx}/>)}
		</div>
	);
}

export default LandingSection;
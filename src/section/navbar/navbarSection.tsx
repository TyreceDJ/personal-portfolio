import { Icon } from '../../component/icon/icon';
import { navbarList, contactList } from './navbarConstants';
import './navbarStyle.css';

function NavBarSection() {
	return (
		<>
			<h1 className='heading'>TJ</h1>
			<div id='navbar'>
				<div id='nav'>
					{navbarList.map((navbarName, idx) => <a className='nav-link' href='#' key={idx}>{navbarName}</a>)}
				</div>
				<div id='contacts'>
					{contactList.map((contact, idx) => <Icon iconType={contact} key={idx}/>)}
				</div>
			</div>
		</>
	);
}

export default NavBarSection;
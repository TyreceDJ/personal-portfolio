import { Icon } from '../../component/icon/icon';
import './navbar.css'

function NavBarSection() {
    return (
        <div>
            <h1 className="heading">TJ</h1>
            <div id="navbar">
                <div id="nav">
                    <a className="nav-link" href="#projectLink">Projects</a>
                    <a className="nav-link" href="#">Experience</a>
                    <a className="nav-link" href="#">Blog</a>
                    <a className="nav-link" href="#">Resume</a>
                </div>
                <div id="contacts">
                    <Icon iconType='github'/>
                    <Icon iconType='linkedin'/>
                    <Icon iconType='email'/>
                </div>
            </div>
        </div>
    );
}

export default NavBarSection;
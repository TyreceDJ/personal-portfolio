import { Card } from '../../component/card/card';
import './experiences.css'

function ExperiencesSection() {
    return (
        <div>
            <h1 className="heading">Experience</h1>
            <div className="grid">
                <Card   id='allstar'
                        name='Allstar Code' 
                        description='' 
                        skills='JavaScript | HTML | CSS | Google Firebase' 
                        time=''/>

                <Card   id='course1'
                        name='15-122' 
                        description='' 
                        skills='C' 
                        time=''/>

                <Card   id='course2'
                        name='15-213' 
                        description='' 
                        skills='C' 
                        time=''/>

                <Card   id='course3'
                        name='15-150' 
                        description='' 
                        skills='SML' 
                        time=''/>
            </div>
        </div>
    );
}

export default ExperiencesSection;
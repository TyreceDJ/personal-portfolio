import { Card } from '../../component/card/card';
import './landing.css'

function LandingSection() {
    return (
        <div className="grid" id="landing">
            <Card   id='image-border'
                    name='Tyrece Jeffrey!'/>

            <Card   id='about'
                    name='About' 
                    description=''/>

            <Card   id='mission'
                    name='Ambitions' 
                    description=''/>
            
            <Card   id='skill'
                    name='Votes' 
                    description=''/>
        </div>
    );
}

export default LandingSection;
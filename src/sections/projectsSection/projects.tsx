import { CardInfo } from '../../component/cardInfo/cardInfo';
import './projects.css'

function ProjectsSection() {
    return (
        <div>
            <h1 className="heading" id="projectLink">Projects</h1>
            <div id="projects">
                <CardInfo   boxId='voteBox'
                            cardId='vote'
                            name='Vote Today' 
                            description='' 
                            skills='JavaScript | HTML | CSS' 
                            time='' 
                            githubLink='https://github.com/YvonielASC20/voteToday'
                            largeDescription=''
                />
                <CardInfo   boxId='cacheBox'
                            cardId='cache'
                            name='Cache' 
                            description='' 
                            skills='C' 
                            time=''
                            largeDescription=''
                />
                <CardInfo   boxId='cmdBox'
                            cardId='cmd'
                            name='Command Shell' 
                            description='' 
                            skills='C' 
                            time=''
                            largeDescription=''
                />
                <CardInfo   boxId='proxyBox'
                            cardId='proxy'
                            name='Proxy' 
                            description='' 
                            skills='C' 
                            time=''
                            largeDescription=''
                />
                <CardInfo   boxId='flagBox'
                            cardId='flag'
                            name='Flag Quiz' 
                            description='' 
                            skills='JavaScript | HTML | CSS' 
                            time=''
                            githubLink='https://github.com/TyreceDJ/FlagQuiz'
                            largeDescription=''
                />
                <CardInfo   boxId='webBox'
                            cardId='web'
                            name='Personal Website' 
                            description='' 
                            skills='React | TypeScript | CSS' 
                            time=''
                            githubLink='https://github.com/TyreceDJ/TyreceDJ.github.io'
                            largeDescription=''
                />
            </div>
        </div>
    );
}

export default ProjectsSection;
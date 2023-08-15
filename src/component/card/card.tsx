import { FunctionComponent, ReactElement } from 'react';
import './card.css';
import { Icon } from '../icon/icon';

export type CardProps = {
    id?: string,
    name: string,
    description?: string,
    skills?: string,
    time?: string,
    githubLink?: string
}

export const Card: FunctionComponent<CardProps> = (props: CardProps): ReactElement => {
    const { id, name, description, skills, time, githubLink } = props;
    
    let githubElement: ReactElement | undefined;
    if (!(githubLink === undefined || githubLink === '')) {
        githubElement = <Icon iconType='github' githubLink={githubLink}/>
    }

    let skillElement: ReactElement | undefined;
    if (!(skills === undefined || skills === '')) {
        skillElement = <div className='skillInfo'>{skills}</div>
    }

    let timeElement: ReactElement | undefined;
    if (time !== undefined) {
        timeElement = (
            <div className='timeInfo'>
                <h1>{time}</h1>
                {githubElement}
            </div>
        );
    }

    // Case for the card with the image
    let descriptionElement: ReactElement | undefined;
    if (description !== undefined) {
        descriptionElement = <h1 className='info'>{description}</h1> 
    }

    let imageElement: ReactElement | undefined;
    if (id === 'image-border') {
        imageElement = <div id="image"></div>
    }

    return (
        <div className='card' id={id}>
            <div className='top'>
                <h1>{name}</h1>
            </div>
            {descriptionElement}
            {imageElement}
            {skillElement}
            {timeElement}
        </div>
    );
}
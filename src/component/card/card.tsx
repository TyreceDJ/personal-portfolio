import { FunctionComponent, ReactElement } from 'react';
import './card.css';
import { Icon } from '../icon/icon';

export interface CardProps {
    cardId?: string,
    name: string,
    description?: string,
    skills?: string,
    time?: string,
    githubLink?: string
}

export const Card: FunctionComponent<CardProps> = (props: CardProps): ReactElement => {
	const { cardId, name, description, skills, time, githubLink } = props;

	return (
		<div className='card' id={cardId}>
			<div className='top'>
				<h1>{name}</h1>
			</div>
			{description !== undefined && 
				<h1 className='info'>{description}</h1>
			}
			{cardId === 'image-border' && 
				<div id='image'></div>
			}
			{!(skills === undefined || skills === '') &&
				<div className='skillInfo'>{skills}</div>
			}
			{time !== undefined && 
				<div className='timeInfo'>
					<h1>{time}</h1>
					{!(githubLink === undefined || githubLink === '') &&
						<Icon iconType='github' githubLink={githubLink}/>
					}
				</div>
			}
		</div>
	);
};
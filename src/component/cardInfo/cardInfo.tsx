import { FunctionComponent, ReactElement } from 'react';
import { Card, CardProps } from '../card/card';
import './cardInfo.css';

export interface CardInfoProps extends CardProps {
    boxId?: string,
    largeDescription: string
}

export const CardInfo: FunctionComponent<CardInfoProps> = (props: CardInfoProps): ReactElement => { 
	const { boxId, cardId, name, description, skills, time, githubLink, largeDescription } = props;
	return (
		<div id={boxId}>
			<Card   
				cardId={cardId}
				name={name}
				description={description}
				skills={skills} 
				time={time}
				githubLink={githubLink}
			/>
			<h1 className='text'>
				{largeDescription}
			</h1>
		</div>
	);
};
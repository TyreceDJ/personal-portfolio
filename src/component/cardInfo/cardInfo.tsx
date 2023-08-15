import { FunctionComponent, ReactElement } from "react";
import { Card } from "../card/card";
import './cardInfo.css';

export type CardInfoProps = {
    boxId?: string,
    cardId?: string,
    name: string,
    description?: string,
    skills?: string,
    time?: string,
    githubLink?: string,
    largeDescription: string
}

export const CardInfo: FunctionComponent<CardInfoProps> = (props: CardInfoProps): ReactElement => { 
    const { boxId, cardId, name, description, skills, time, githubLink, largeDescription } = props;
    return (
        <div id={boxId}>
            <Card   id={cardId}
                    name={name}
                    description={description}
                    skills={skills} 
                    time={time}
                    githubLink={githubLink}
            />
            <h1 className="text">
                {largeDescription}
            </h1>
        </div>
    );
}
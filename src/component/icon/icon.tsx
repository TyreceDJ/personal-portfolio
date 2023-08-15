import { FunctionComponent, ReactElement } from 'react';
import './icon.css';

type IconType = 'github' | 'email' | 'linkedin';
type StringMap = { [index: string]: string };

export type IconProps = {
    iconType: IconType,
    githubLink?: string
}

const linkMap = new Map<IconType, StringMap>([
    ['github', {
        link: 'https://github.com/TyreceDJ',
        className: 'fa-brands fa-github fa-lg'
    }],
    ['email', {
        link: '',
        className: 'fa-regular fa-envelope fa-lg'
    }],
    ['linkedin', {
        link: 'https://www.linkedin.com/in/tyrece-jeffrey',
        className: 'fa-brands fa-linkedin-in fa-lg'
    }]
]);

export const Icon: FunctionComponent<IconProps> = (props: IconProps): ReactElement => { 
    const { iconType, githubLink } = props;

    let returnLink: string = linkMap.get(iconType)!.link;
    if (iconType === 'github' && githubLink !== undefined) {
        returnLink = githubLink;
    }

    return (
        <a  href={returnLink}
            target='_blank' 
            rel='noreferrer'>
                <i className={linkMap.get(iconType)!.className}/>
        </a>
    );
}
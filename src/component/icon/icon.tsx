import { FunctionComponent, ReactElement } from 'react';
import { IconProps, getIconAttributeInfo } from './iconConstants';
import './icon.css';

export const Icon: FunctionComponent<IconProps> = (props: IconProps): ReactElement => { 
	const { iconType, githubLink } = props;
	const { link, className } = getIconAttributeInfo(iconType);
	return (
		<a 	href={iconType === 'github' && githubLink !== undefined ? githubLink : link}
			target='_blank' 
			rel='noreferrer'>
			<i className={className}/>
		</a>
	);
};
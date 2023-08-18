export type IconType = 'github' | 'email' | 'linkedin';

type IconAttribute = { 
	link: string,
	className: string
}

export interface IconProps {
    iconType: IconType,
    githubLink?: string
}

const iconAttributeInfoMap = new Map<IconType, IconAttribute>([
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

/**
 * @param type is type github | email | linkedin
 * @returns the attribute information given the specific type
 */
export const getIconAttributeInfo = (type: IconType): IconAttribute => {
	return iconAttributeInfoMap.get(type) || { link: '', className: '' };
};

import { token } from '@bigzoo/theme/tokens';
import type { JSX } from 'react';
import type { Size } from '../types';
import { type IconName, IconsRegistry } from './IconsRegistry';

const iconSize: Record<Size, number> = {
	small: 10,
	default: 20,
	large: 30,
	xlarge: 40,
};

export const Icon = ({
	icon,
	color,
	size = 'default',
}: { icon: IconName; color?: string; size?: Size }): JSX.Element => {
	const IconComponent = IconsRegistry[icon];
	const iconColor = color ?? token('colors.surface.stroke.600');
	return (
		<IconComponent
			width={`${iconSize[size]}px`}
			height={`${iconSize[size]}px`}
			fill={iconColor}
		/>
	);
};

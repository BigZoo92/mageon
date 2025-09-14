import { styled } from '@bigzoo/theme/jsx';

export const ToggleRoot = styled('button', {
	base: {
		borderRadius: '5rem',
		width: '4rem',
		height: '2rem',
		position: 'relative',
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
		padding: '0.5rem 0.25rem',
		outline: '2px solid',
		outlineColor: 'utility.white',
		overflow: 'hidden',
		cursor: 'pointer',
		userSelect: 'none',
		transition: '0.35s ease-in-out',

		_focusVisible: {
			outlineColor: 'utility.warning',
			boxShadow: '0 0 0 4px token(colors.utility.warning / 0.35)',
		},

		'@media (prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
	variants: {
		variant: {
			light: {
				backgroundColor: 'utility.warning',
			},
			dark: {
				backgroundColor: 'utility.black',
			},
		},
	},
});

export const Thumb = styled('span', {
	base: {
		borderRadius: '50%',
		aspectRatio: '1/1',
		position: 'absolute',
		width: '0.75rem',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		background: 'utility.white',
		transform: 'translate(0.25rem, 0rem) rotate(0deg)',
		transition: '0.35s ease-in-out',
		left: '0.5rem',
		'@media (prefers-reduced-motion: reduce)': {
			transition: 'none',
		},

		_before: {
			content: '""',
			position: 'absolute',
			width: '75%',
			bottom: '-10%',
			aspectRatio: '1/1',
			borderRadius: '50%',
			background: 'utility.black',
			opacity: 0,
			transform: 'translate(0%, 15%)',
			transition: 'opacity 0.175s ease-in-out, transform 0.35s ease-in-out',

			'@media (prefers-reduced-motion: reduce)': {
				transition: 'none',
			},
		},
	},
	variants: {
		variant: {
			moon: {
				transform: 'translate(2rem, 0rem) rotate(135deg)',
				width: '1.5rem',
				left: 'inherit',
				_before: {
					opacity: 1,
					transform: 'translate(0%, 0%)',
					background: 'utility.black',
				},
			},
		},
	},
});

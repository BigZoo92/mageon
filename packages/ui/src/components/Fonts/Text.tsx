import { styled } from '@bigzoo/theme/jsx';

const StyledText = styled('p', {
	base: {
		color: 'text.800',
	},
	variants: {
		danger: {
			true: {
				color: 'utility.danger',
			},
		},
		warning: {
			true: {
				color: 'utility.warning',
			},
		},
		success: {
			true: {
				color: 'utility.success',
			},
		},
	},
});

export { StyledText as Text };

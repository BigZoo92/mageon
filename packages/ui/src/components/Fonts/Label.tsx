import { styled } from '@bigzoo/theme/jsx';

const StyledLabel = styled('label', {
	base: {
		color: 'Label.800',
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

export { StyledLabel as Label };

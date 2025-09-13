import { styled } from '@bigzoo/design-system/jsx';

const StyledTitle = styled('p', {
	base: {
		color: 'Title.800',
		fontWeight: 'bold',
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

export { StyledTitle as Title };

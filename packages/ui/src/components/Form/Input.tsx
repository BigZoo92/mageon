import { cva } from '@bigzoo/theme/css';
import { Flex, styled } from '@bigzoo/theme/jsx';
import { token } from '@bigzoo/theme/tokens';
import { type CSSProperties, useState } from 'react';
import { Label } from '../Fonts/Label';
import { Text } from '../Fonts/Text';
import { Icon } from '../Icons/Icon';
import type { IconName } from '../Icons/IconsRegistry';

const AUTOFILL =
	'&:autofill, &:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus, &:-moz-autofill';

const inputRecipe = cva({
	base: {
		backgroundColor: 'bg',
		border: '1px solid',
		padding: 'input',
		borderColor: 'surface.stroke.200',
		borderRadius: 'default',
		caretColor: 'surface.stroke.600',
		transition: 'all 0.15s ease-in-out',

		_focus: {
			border: '1px solid',
			outline: '0px solid',
			borderColor: 'surface.stroke.400',
			boxShadow: 'input.default',
		},
		_focusVisible: {
			border: '1px solid',
			outline: '0px solid',
			borderColor: 'surface.stroke.400',
			boxShadow: 'input.default',
		},

		[AUTOFILL]: {
			boxShadow: 'autofill',
			caretColor: 'surface.stroke.600',
			fontFamily: 'body !important',
			transition: 'background-color 9999s ease-out',
			backgroundClip: 'padding-box',
			fontSize: 'default !important',
		},
	},
	variants: {
		withIcon: {
			true: {
				paddingInlineStart:
					'calc(var(--icon-inset) + var(--icon-size) + var(--icon-gap))',
			},
		},
		withTwoIcons: {
			true: {
				paddingInline:
					'calc(var(--icon-inset) + var(--icon-size) + var(--icon-gap))',
			},
		},
		error: {
			true: {
				borderColor: 'utility.danger',
				caretColor: 'utility.danger',
				color: 'utility.danger',
				_focus: {
					border: '1.5px solid',
					borderColor: 'utility.danger',
					boxShadow: 'input.danger',
					color: 'utility.danger',
				},
				_focusVisible: {
					border: '1.5px solid',
					borderColor: 'utility.danger',
					boxShadow: 'input.danger',
					color: 'utility.danger',
				},
			},
		},
	},
});

const StyledInput = styled('input', inputRecipe);
const InputContainer = styled(Flex, {
	base: {
		position: 'relative',
		alignItems: 'center',
		'--icon-inset': '{spacing.xs}',
		'--icon-gap': '{spacing.xs}',
		'--icon-size': '20px',
	},
});
const IconContainer = styled('div', {
	base: { position: 'absolute' },
	variants: {
		firstIcon: {
			true: {
				left: '{spacing.xs}',
			},
		},
		secondIcon: {
			true: {
				right: '{spacing.xs}',
			},
		},
	},
});

const InputWithLabelContainer = styled(Flex, {
	base: {
		position: 'relative',
		flexDirection: 'column',
		gap: '{spacing.xxs}',
		width: 'fit-content',
	},
});

export const Input = ({
	id,
	icon,
	label,
	description,
	error,
	type,
	width = '250px',
	placeholder,
}: {
	id: string;
	icon?: IconName;
	label?: string;
	description?: string;
	error?: string;
	type?: React.HTMLInputTypeAttribute;
	width?: CSSProperties['width'];
	placeholder?: string;
}) => {
	const fgVar = token.var('colors.text.800');
	const style = {
		// biome-ignore lint/style/useNamingConvention: <explanation>
		WebkitTextFillColor: fgVar,
		'--autofill-fg': fgVar,
	};
	const isError = !!error;
	const isPassword = type === 'password';
	const [displayPassword, setDisplayPassword] = useState<boolean>(false);
	return (
		<InputWithLabelContainer>
			{label && (
				<Label htmlFor={id} fontSize={'small'} marginLeft={'calc(xxs / 2)'}>
					{label}
				</Label>
			)}
			<InputContainer>
				{icon && (
					<IconContainer aria-hidden="true" firstIcon>
						<Icon
							icon={icon}
							color={
								isError
									? token.var('colors.utility.danger')
									: token.var('colors.text.800')
							}
						/>
					</IconContainer>
				)}
				<StyledInput
					type={
						isPassword && !displayPassword ? type : isPassword ? 'text' : type
					}
					id={id}
					name={id}
					style={style}
					withIcon={!!icon}
					withTwoIcons={isPassword && !!icon}
					error={isError}
					width={width}
					placeholder={placeholder}
					autoComplete="on"
				/>
				{isPassword && (
					<IconContainer
						aria-hidden="true"
						onClick={() => setDisplayPassword((prev) => !prev)}
						secondIcon
					>
						<Icon
							icon={displayPassword ? 'eye' : 'eye-slashed'}
							color={
								isError
									? token.var('colors.utility.danger')
									: token.var('colors.text.800')
							}
						/>
					</IconContainer>
				)}
			</InputContainer>
			{description && (
				<Text
					marginLeft={'calc(xxs / 2)'}
					fontSize={'small'}
					color={'text.400'}
				>
					{description}
				</Text>
			)}
			{isError && (
				<Text marginLeft={'calc(xxs / 2)'} fontSize={'small'} danger>
					{error}
				</Text>
			)}
		</InputWithLabelContainer>
	);
};

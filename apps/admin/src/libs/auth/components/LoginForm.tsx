import { Flex, styled } from '@bigzoo/theme/jsx';
import { Button, Icon, Input, Text, Title } from '@bigzoo/ui';

const StyledForm = styled('form', {
	base: {
		gap: 'xs',
		display: 'flex',
		flexDirection: 'column',
	},
});

const Separator = styled(Flex, {
	base: {
		fontSize: 'small',
		color: 'text.200',
		textAlign: 'center',
		position: 'relative',
		alignItems: 'center',
		justifyContent: 'center',
		_before: {
			content: '""',
			position: 'absolute',
			width: '100%',
			height: '1px',
			bg: 'text.200',
			zIndex: -2,
		},
		_after: {
			content: '""',
			position: 'absolute',
			width: '30px',
			height: '40px',
			bg: 'bg',
			zIndex: -1,
		},
	},
});

export const LoginForm = () => {
	return (
		<StyledForm action="">
			<Title fontSize={'h1'}>Welcom Back</Title>
			<Flex direction={'column'} width={'fit-content'} gap={'sm'}>
				<Text fontSize={'small'} color={'text.200'}>
					Please, log in with your account to continue
				</Text>
				<Input id="email" icon="envelope" label="Email" type="email" />
				<Input id="password" icon="lock" label="Password" type="password" />
				<Button theme="primary">Log In</Button>
				<Separator>Or</Separator>
				<Button theme="tertiary">
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							width: '100%',
							position: 'relative',
						}}
					>
						<div
							style={{
								position: 'absolute',
								left: 0,
							}}
						>
							<Icon icon="google" size="large" />
						</div>
						<Text flex={1}>Log In With Google</Text>
					</div>
				</Button>
			</Flex>
		</StyledForm>
	);
};

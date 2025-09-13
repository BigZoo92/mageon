import { styled } from "@bigzoo/design-system/jsx";
import type { CSSProperties, JSX } from "react";
import { Icon } from "../Icons/Icon";
import type { IconName } from "../Icons/IconsRegistry";

const StyledButton = styled("button", {
	base: {
		borderRadius: "default",
		padding: "xxs",
		cursor: "pointer",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		transition: "all ease-out 0.2s",
	},
	variants: {
		theme: {
			primary: {
				bg: "primary",
				color: "utility.white",
				_hover: {
					bg: "primary/80",
				},
			},
			secondary: { border: "1px solid", borderColor: "primary" },
			tertiary: {
				bg: "primary/20",
				border: "1px solid",
				borderColor: "primary",
				color: "primary",
			},
		},
	},
});

const IconContainer = styled("div", {
	base: {},
});

export const Button = ({
	children,
	theme,
	icon,
	width = "250px",
}: {
	children: string | JSX.Element;
	theme?: "primary" | "secondary" | "tertiary";
	icon?: IconName;
	width?: CSSProperties["width"];
}) => {
	return (
		<StyledButton theme={theme} width={width}>
			{icon && (
				<IconContainer>
					<Icon icon={icon} />
				</IconContainer>
			)}
			{children}
		</StyledButton>
	);
};

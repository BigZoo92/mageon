import { LoginForm } from "@/libs/auth";
import { styled } from "@bigzoo/design-system/jsx";
import { createFileRoute } from "@tanstack/react-router";
import { ThemeToggle } from "../components/ThemeToggle/ThemeToggle";

export const Route = createFileRoute("/")({
	component: App,
});

const ToggleThemeContainer = styled("div", {
	base: {
		position: "fixed",
		right: "sm",
		bottom: "sm",
	},
});

function App() {
	return (
		<div
			style={{
				height: "100dvh",
				width: "100dvw",
				position: "relative",
				padding: "8px",
				overflow: "hidden",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<LoginForm />
			<ToggleThemeContainer>
				<ThemeToggle />
			</ToggleThemeContainer>
		</div>
	);
}

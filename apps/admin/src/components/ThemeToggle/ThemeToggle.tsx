import { useColorMode } from "../../hooks/useColorMode";
import { Thumb, ToggleRoot } from "./ThemeToggle.styles";
import { RAYS } from "./constants";

export function ThemeToggle() {
	const { mode, toggle } = useColorMode();
	const isLightMode = mode === "light";
	return (
		<ToggleRoot
			onClick={toggle}
			aria-label="switch theme"
			variant={isLightMode ? "light" : "dark"}
		>
			<Thumb variant={isLightMode ? undefined : "moon"}>
				{RAYS[mode].map(({ top, left, width }, index) => (
					<Thumb
						key={String(index)}
						style={{
							opacity: isLightMode ? 1 : 0.5,
							top,
							left,
							width,
						}}
					/>
				))}
			</Thumb>
		</ToggleRoot>
	);
}

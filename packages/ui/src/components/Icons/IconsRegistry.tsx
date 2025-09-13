import type { JSX, SVGProps } from "react";
import { Envelope, Eye, EyeSlashed, Google, LockKey } from "./ExternalIcons";

export const IconsRegistry = {
	envelope: Envelope,
	lock: LockKey,
	eye: Eye,
	"eye-slashed": EyeSlashed,
	google: Google,
} as const satisfies Record<
	string,
	(props: SVGProps<SVGSVGElement>) => JSX.Element
>;

export type IconName = keyof typeof IconsRegistry;

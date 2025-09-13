interface RayType {
	top: string;
	width: string;
	left: string;
}

export const RAYS: { light: RayType[]; dark: RayType[] } = {
	light: [
		{
			top: "-0.35rem",
			left: "0rem",
			width: "0.25rem",
		},
		{
			top: "0.25rem",
			left: "0.65rem",
			width: "0.25rem",
		},
		{
			top: "0.85rem",
			left: "0rem",
			width: "0.25rem",
		},
		{
			top: "0.25rem",
			left: "-0.65rem",
			width: "0.25rem",
		},
		{
			top: "-0.1rem",
			left: "-0.35rem",
			width: "0.15rem",
		},
		{
			top: "-0.1rem",
			left: "0.5rem",
			width: "0.15rem",
		},
		{
			top: "0.7rem",
			left: "0.5rem",
			width: "0.15rem",
		},
		{
			top: "0.7rem",
			left: "-0.4rem",
			width: "0.15rem",
		},
	],
	dark: [
		{
			top: "2rem",
			left: "2rem",
			width: "0.25rem",
		},
		{
			top: "1.25rem",
			left: "2rem",
			width: "0.25rem",
		},
		{
			top: "1.75rem",
			left: "1.25rem",
			width: "0.25rem",
		},
		{
			top: "2.5rem",
			left: "1.5rem",
			width: "0.25rem",
		},
		{
			top: "1.5rem",
			left: "0.5rem",
			width: "0.15rem",
		},
		{
			top: "1.25rem",
			left: "1.5rem",
			width: "0.15rem",
		},
		{
			top: "1.75rem",
			left: "2.5rem",
			width: "0.15rem",
		},
		{
			top: "2.5rem",
			left: "2.25rem",
			width: "0.15rem",
		},
	],
};

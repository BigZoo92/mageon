import { definePreset } from "@pandacss/dev";
import { layerStyles } from "./panda.config.layerStyles";
import { textStyles } from "./panda.config.textStyles";

export const theme = definePreset({
	name: "theme",
	theme: {
		layerStyles,
		textStyles,
		extend: {
			tokens: {
				shadows: {
					input: {
						default: {
							value:
								"rgba(180, 71, 99, 0.5) 0px 0px 0px 3px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
						},
						danger: {
							value:
								"rgba(221, 45, 74, 0.5) 0px 0px 0px 3px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
						},
					},
					autofill: {
						value: "inset 0 0 0 1000px {colors.autofill}",
					},
				},
				radii: {
					default: { value: "0.25rem" },
				},
				fonts: {
					body: { value: "Inter, sans-serif" },
					heading: { value: "Inter, sans-serif" },
				},
				spacing: {
					xxs: { value: "0.25rem" },
					xs: { value: "0.5rem" },
					sm: { value: "0.75rem" },
					md: { value: "1rem" },
					lg: { value: "1.25rem" },
					xl: { value: "1.5rem" },
					xxl: { value: "2rem" },
					input: { value: "0.25rem 0.5rem" },
				},
				fontSizes: {
					h1: { value: "clamp(2rem, 3dvw, 3rem)" },
					default: { value: "14px" },
					small: { value: "12px" },
				},
				fontWeights: {
					light: { value: "200" },
					default: { value: "400" },
					bold: { value: "700" },
				},

				colors: {
					brand: {
						50: { value: "#FF9FAF" },
						500: { value: "#be006cff" },
						700: { value: "#CC095D" },
					},
					secondary: {
						50: { value: "#FF9FAF" },
						500: { value: "#fd0363ff" },
						700: { value: "#CC095D" },
					},
					black: { 500: { value: "#121225" } },
					white: { 500: { value: "#fffafb" } },
					fillD: { value: "rgba(117, 104, 110, 0.35)" },
					fillL: { value: "rgba(201, 164, 180, 0.35)" },
					ink: {
						200: { value: "#70696cff" },
						400: { value: "#2C2427" },
						600: { value: "#1B1517" },
						800: { value: "#0E070A" },
					},
					paper: {
						200: { value: "#938386" },
						400: { value: "#C9BABD" },
						600: { value: "#E4D5D8" },
						800: { value: "#FFF0F3" },
					},
					plum: { value: "#780C42" },
					accent: { value: "#2d0418ff" },
					strokeL: {
						200: { value: "#C6BDBD" },
						400: { value: "#1d1d27ff" },
						600: { value: "#121225" },
					},
					strokeD: {
						200: { value: "#C6BDBD" },
						400: { value: "#E3DEDE" },
						600: { value: "#fffafb" },
					},

					danger: {
						50: { value: "#FF9FAF" },
						500: { value: "#DD2D4A" },
						700: { value: "#671523" },
					},
					success: {
						50: { value: "#9FFFBD" },
						500: { value: "#04A777" },
						700: { value: "#01422F" },
					},
					warning: {
						50: { value: "#FFDFA5" },
						500: { value: "#FFBC42" },
						700: { value: "#513C16" },
					},
					autofillL: { value: "#FD036326" },
					autofillD: { value: "#75686e59" },
				},

				zIndex: { modal: { value: 1000 } },
				borders: { danger: { value: "1px solid black" } },
				assets: {
					logo: { value: { type: "url", value: "/static/logo.png" } },
				},
			},

			semanticTokens: {
				colors: {
					bg: {
						value: { base: "{colors.paper.800}", _dark: "{colors.ink.800}" },
					},

					text: {
						200: {
							value: { base: "{colors.ink.200}", _dark: "{colors.paper.200}" },
						},
						400: {
							value: { base: "{colors.ink.400}", _dark: "{colors.paper.400}" },
						},
						600: {
							value: { base: "{colors.ink.600}", _dark: "{colors.paper.600}" },
						},
						800: {
							value: { base: "{colors.ink.800}", _dark: "{colors.paper.800}" },
						},
					},

					autofill: {
						value: { base: "{colors.autofillL}", _dark: "{colors.autofillD}" },
					},
					autofillFg: {
						value: { base: "{colors.ink.800}", _dark: "{colors.paper.800}" },
					},

					muted: { value: { base: "#475569", _dark: "#cbd5e1" } },
					primary: {
						value: { base: "{colors.brand.500}", _dark: "{colors.brand.500}" },
					},
					secondary: {
						value: {
							base: "{colors.secondary.500}",
							_dark: "{colors.secondary.500}",
						},
					},

					utility: {
						white: { value: { base: "{colors.white.500}" } },
						black: { value: { base: "{colors.black.500}" } },
						danger: {
							value: {
								base: "{colors.danger.500}",
								_dark: "{colors.danger.500}",
							},
						},
						success: {
							value: {
								base: "{colors.success.500}",
								_dark: "{colors.success.500}",
							},
						},
						warning: {
							value: {
								base: "{colors.warning.500}",
								_dark: "{colors.warning.500}",
							},
						},
					},

					surface: {
						app: {
							value: { base: "{colors.paper.800}", _dark: "{colors.ink.800}" },
						},
						section: {
							value: { base: "{colors.plum}", _dark: "{colors.plum}" },
						},
						fill: {
							value: { base: "{colors.fillL}", _dark: "{colors.fillD}" },
						},

						stroke: {
							200: {
								value: {
									base: "{colors.strokeL.200}",
									_dark: "{colors.strokeD.200}",
								},
							},
							400: {
								value: {
									base: "{colors.strokeL.400}",
									_dark: "{colors.strokeD.400}",
								},
							},
							600: {
								value: {
									base: "{colors.strokeL.600}",
									_dark: "{colors.strokeD.600}",
								},
							},
						},
					},
				},
			},
		},
	},

	globalCss: {
		":root": { colorScheme: "light dark" },
		html: {
			minHeight: "100dvh",
			bgColor: "bg",
			color: "text.800",
		},
		"body, #root": { minHeight: "100dvh", background: "transparent" },
		':root[data-theme="dark"]': { colorScheme: "dark" },
		"input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus":
			{
				// biome-ignore lint/style/useNamingConvention: <explanation>
				WebkitTextFillColor: "var(--autofill-fg) !important",
			},
		"input:autofill": {
			// biome-ignore lint/style/useNamingConvention: <explanation>
			WebkitTextFillColor: "var(--autofill-fg) !important",
		},
		"input:-moz-autofill": {
			color: "var(--autofill-fg) !important",
		},
	},
});

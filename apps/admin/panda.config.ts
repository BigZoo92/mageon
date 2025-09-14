import { defineConfig } from "@pandacss/dev";
import { theme } from "@bigzoo/theme";

export default defineConfig({
	jsxFramework: "react",
	preflight: true,
	exclude: [],
	lightningcss: true,
	minify: true,
	hash: true,
	clean: true,
	presets: ["@pandacss/dev/presets", theme],
	include: ["./src/**/*.{ts,tsx}", "../../packages/ui/src/**/*.{ts,tsx}"],
	importMap: "@bigzoo/theme",
});

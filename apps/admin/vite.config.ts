import path from "node:path";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { imagetools } from "vite-imagetools";
import svgr from "vite-plugin-svgr";
import viteTsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	plugins: [
		viteTsConfigPaths({ projects: ["./tsconfig.json"] }),
		tanstackRouter({
			target: "react",
			autoCodeSplitting: true,
		}),
		react(),
		svgr(),
		imagetools(),
	],
	resolve: {
		alias: {
			"@/assets": path.resolve(__dirname, "./src/assets"),
			"@/libs/auth": path.resolve(__dirname, "./src/libs/auth"),
			"@bigzoo/ui": path.resolve(__dirname, "../../packages/ui/src"),
			"@/": path.resolve(__dirname, "./src"),
			react: path.resolve(__dirname, "../../node_modules/react"),
			"react-dom": path.resolve(__dirname, "../../node_modules/react-dom"),
			"react/jsx-runtime": path.resolve(
				__dirname,
				"../../node_modules/react/jsx-runtime.js",
			),
		},
		dedupe: ["react", "react-dom"],
	},
	optimizeDeps: {
		exclude: ["@bigzoo/ui", "@bigzoo/theme"],
		include: ["react", "react-dom"],
	},
	server: { port: 3000, fs: { strict: false } },
});

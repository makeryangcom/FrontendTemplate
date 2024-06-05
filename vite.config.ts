import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
	plugins: [vue()],
	server: {
		host: "www.dev.com",
		port: 20024,
		proxy: {
			"/api": {
				target: "https://api.desktop.chatdesktop.com",
				secure: false,
				changeOrigin: true,
				rewrite: (path: any) => path.replace(/^\/api/, '')
			},
		}
	},
	css: {
		postcss: {
			plugins: [tailwind(), autoprefixer()],
		}
	},
	build: {
		outDir: "./release",
	},
})

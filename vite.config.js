import { resolve } from "path";
import { defineConfig } from 'vite';

export default defineConfig({
	base: "/.",
	server: {
		host: true, // listen on all interfaces
		allowedHosts: ['.ngrok-free.app'], // allow ngrok and all its subdomains
	},
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				plant: resolve(__dirname, "plant/index.html"),
			}
		}
	}
});


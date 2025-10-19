import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true, // listen on all interfaces
    allowedHosts: ['.ngrok-free.app'], // allow ngrok and all its subdomains
  },
});

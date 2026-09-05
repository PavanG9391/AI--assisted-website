import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// The Vite setup is enabling React transforms for the frontend build.
export default defineConfig({
  plugins: [react()],
});

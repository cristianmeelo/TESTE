import svgr from '@svgr/rollup';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), dts({ rollupTypes: true })],
});

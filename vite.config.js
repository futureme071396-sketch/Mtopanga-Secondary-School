import { defineConfig } from 'vite';

export default defineConfig({
  // No root/outDir – Vite defaults: root=project, outDir=dist
  build: {
    // Ensures dist is emptied
    emptyOutDir: true
  }
});

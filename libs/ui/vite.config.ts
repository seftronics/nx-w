/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import * as path from 'path';
import tailwindcss from '@tailwindcss/vite';
import type { OutputBundle } from 'rollup';

// Plugin to preserve "use client" directive
function preserveUseClient() {
  return {
    name: 'preserve-use-client',
    generateBundle(_: unknown, bundle: OutputBundle) {
      Object.keys(bundle).forEach((fileName) => {
        const chunk = bundle[fileName];
        if (chunk.type === 'chunk' && fileName.endsWith('.js')) {
          chunk.code = `"use client";\n${chunk.code}`;
        }
      });
    },
  };
}

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/libs/ui',
  plugins: [
    react(),
    dts({
      entryRoot: 'src',
      tsconfigPath: path.join(__dirname, 'tsconfig.lib.json'),
    }),
    tailwindcss(),
    preserveUseClient(),
  ],
  build: {
    outDir: './dist',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    lib: {
      entry: 'src/index.ts',
      name: '@nx-w/ui',
      fileName: 'index',
      formats: ['es' as const],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
    },
  },
}));

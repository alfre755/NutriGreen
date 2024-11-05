import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: [
          ['@emotion/babel-plugin', { autoLabel: 'always', labelFormat: '[local]' }],
        ],
      },
    }),
  ],
  define: {
    'process.env.NODE_ENV': JSON.stringify('development')
  }
});
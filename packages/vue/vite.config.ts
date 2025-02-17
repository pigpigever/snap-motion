import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path';

// https://vite.dev/config/
export default defineConfig({
  build: {
    cssMinify: true,
    lib: {
      entry: resolve(new URL('./src/main.ts', import.meta.url).pathname), // 使用 import.meta.url 替代 __dirname
      name: 'SnapMotion',
      cssFileName: 'snap-motion.min',
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => `snap-motion.${format}.js`,
    },
    outDir: 'dist', // 输出目录
    rollupOptions: {
      external: ['vue'], // 外部依赖
      output: [
        {
          format: 'es',
          dir: 'esm',
          entryFileNames: 'snap-motion.esm.js',
          esModule: true,
          compact: true,
          preserveModules: true,
        },
        {
          format: 'umd',
          dir: 'dist',
          entryFileNames: 'snap-motion.umd.js',
          name: 'snap-motion.umd.js',
        },
        {
          format: 'amd',
          dir: 'lib',
          entryFileNames: 'snap-motion.amd.js',
        }
      ]
    },
  },
  plugins: [
    vue(),
  ],
})
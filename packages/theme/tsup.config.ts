import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  dts: { entry: 'src/index.ts'},
  format: ['esm'],
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom', 'react/jsx-runtime', '@phosphor-icons/react'],
  tsconfig: './tsconfig.json'
})

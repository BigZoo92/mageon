import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  dts: { entry: 'src/index.ts'},
  format: ['esm'],
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom','@bigzoo/design-system/css', '@bigzoo/design-system/jsx', '@bigzoo/design-system/patterns',
  '@bigzoo/design-system/recipes', '@bigzoo/design-system/tokens', 'react/jsx-runtime', '@phosphor-icons/react'],
  tsconfig: './tsconfig.json'
})

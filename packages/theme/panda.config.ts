import { defineConfig } from '@pandacss/dev'
import { theme } from './src/index'


export default defineConfig({
  jsxFramework: 'react',
  preflight: true,
  exclude: [],
  lightningcss: true,
  hash: true,
  clean: true,
  minify: true,
  presets: ['@pandacss/dev/presets', theme],
  include: [],
  importMap: '@bigzoo/theme',
  outdir: './src/',
})

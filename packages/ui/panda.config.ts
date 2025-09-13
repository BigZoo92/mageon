import { defineConfig } from '@pandacss/dev'
import { theme } from '@bigzoo/theme'


export default defineConfig({
  jsxFramework: 'react',
  preflight: true,
  exclude: [],
  lightningcss: true,
  dependencies: ["./panda.config.textStyles", "./panda.config.layerStyles"],
  minify: true,
  presets: ['@pandacss/dev/presets', theme],
  include: ['src/**/*.{ts,tsx}'],
  importMap: '@bigzoo/ui',
  outdir: 'styled-system',
})

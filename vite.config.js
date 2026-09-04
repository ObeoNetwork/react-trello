import react from '@vitejs/plugin-react'
import {storybookTest} from '@storybook/addon-vitest/vitest-plugin'
import {createRequire} from 'node:module'
import path from 'node:path'
import {fileURLToPath} from 'node:url'
import {defineConfig} from 'vite'

const require = createRequire(import.meta.url)
const {peerDependencies = {}} = require('./package.json')
const dirname = path.dirname(fileURLToPath(import.meta.url))
const isExternal = id =>
  Object.keys(peerDependencies).some(dependency => id === dependency || id.startsWith(`${dependency}/`))
export default defineConfig(() => ({
  plugins: [react()],
  resolve: {
    alias: {
      rt: path.resolve(dirname, 'src')
    }
  },
  build: {
    minify: false,
    lib: {
      name: 'ReactTrello',
      entry: path.resolve(dirname, 'src/index.jsx'),
      formats: ['es', 'cjs'],
      fileName: format => (format === 'es' ? 'react-trello.js' : 'react-trello.cjs')
    },
    rollupOptions: {
      external: isExternal
    }
  },
  test: {
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      include: ['src/**/*.{js,jsx}'],
      reporter: ['text', 'html']
    },
    projects: [
      {
        extends: true,
        plugins: [
          storybookTest({
            configDir: path.join(dirname, '.storybook'),
            storybookScript: 'npm run storybook -- --no-open'
          })
        ],
        test: {
          name: 'storybook',
          coverage: {
            provider: 'v8',
            include: ['src/**/*.{js,jsx}'],
            reporter: ['text', 'html']
          },
          browser: {
            enabled: true,
            provider: 'playwright',
            headless: true,
            instances: [{browser: 'chromium'}]
          }
        }
      }
    ]
  }
}))

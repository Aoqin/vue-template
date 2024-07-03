import { fileURLToPath, URL } from 'node:url'
import type { UserConfig, ConfigEnv } from 'vite'
import { defineConfig, loadEnv } from 'vite'
import { wrapperEnv } from './build/utils'

import { vitePluginBuilder } from './build/vite/plugins/index'

// https://vitejs.dev/config/
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()
  const env = loadEnv(mode, root)
  const viteEnv = wrapperEnv(env)
  const isBuild = command === 'build'

  return {
    plugins: vitePluginBuilder(viteEnv, isBuild),
    server: {
      host: true
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '#': fileURLToPath(new URL('./src/types', import.meta.url))
      }
    }
  }
})

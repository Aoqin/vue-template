import type { Plugin, PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import Inspect from 'vite-plugin-inspect'

export function vitePluginBuilder(viteEnv: ViteEnv, isBuild: boolean) {
  const vitePlugins: (Plugin | Plugin[] | PluginOption)[] = [
    vue(),
    vueJsx(),
    Inspect(),
    vueDevTools()
  ]

  return vitePlugins
}

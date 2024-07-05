import type { Plugin, PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import Inspect from 'vite-plugin-inspect'
import { configAutoImportPlugin, configComponentsPlugin } from './autoImport'

export function vitePluginBuilder(viteEnv: ViteEnv, isBuild: boolean) {
  const vitePlugins: (Plugin | Plugin[] | PluginOption)[] = [
    vue(),
    vueJsx(),
    Inspect(),
    vueDevTools()
  ]

  // 自动引入依赖
  vitePlugins.push(configAutoImportPlugin())

  // 自动注册引入组件
  vitePlugins.push(configComponentsPlugin())

  return vitePlugins
}

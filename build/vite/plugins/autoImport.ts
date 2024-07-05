import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

/**
 * 按需引入
 * @returns
 */
export function configAutoImportPlugin() {
  const autoImportPlugin = AutoImport({
    imports: ['vue', 'vue-router', 'pinia'],
    resolvers: [
      // Auto import Element Plus components
      //   ElementPlusResolver(),
      // Auto import icon components
      //   IconsResolver({
      //     prefix: 'Icon'
      //   })
    ],
    // include: [/\.[tj]sx?$/, /\.vue$/],
    eslintrc: { enabled: true }
  })
  return autoImportPlugin
}

// 按需引入组件
export function configComponentsPlugin() {
  const componentsPlugin = Components({
    resolvers: [
      // Auto register iconify components
      //   IconsResolver({
      //     enabledCollections: ['ep']
      //     // use as <i-ep-iconName />
      //   }),
      // Auto register Element Plus components
      //   ElementPlusResolver()
    ],
    dirs: ['!src/components'], // 配置需要默认导入的自定义组件文件夹，该文件夹下的所有组件都会自动 import,默认会导入 src/components 下的组件，这里不需要就排除掉
    dts: true,
    include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    exclude: [/node_modules/, /\.git/]
  })
  return componentsPlugin
}

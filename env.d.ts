/// <reference types="vite/client" />

/**
 * @description: vue文件类型声明
 * ()=> import('@/views/index.vue') connot find module
 */
declare module '*.vue' {
  import type { ComponentOptions } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: ComponentOptions | ComponentOptions['setup']
  export default component
}

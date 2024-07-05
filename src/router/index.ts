import type { App } from 'vue'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import type { AppRouteModule } from './type'
import { basicRoutes } from './routes/index'
// import { RouterGuardBuilder } from './guard/builder'

const modules = import.meta.glob('./modules/**/*.ts', { eager: true })

// 白名单应该包含基本静态路由
const WHITE_NAME_LIST: string[] = []
const WhiteRouteNameBuilder = (array: any[]) =>
  array.forEach((item) => {
    WHITE_NAME_LIST.push(item.name)
    WhiteRouteNameBuilder(item.children || [])
  })

// 生成白名单
WhiteRouteNameBuilder(basicRoutes)

const routeModuleList: AppRouteModule[] = []

// 生成路由模块
Object.keys(modules).forEach((key) => {
  const mod = (modules[key] as Record<string, any>).default || {}
  const modList = Array.isArray(mod) ? [...mod] : [mod]
  routeModuleList.push(...modList)
})

const asyncRoutes: AppRouteModule[] = [...routeModuleList]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [asyncRoutes, ...basicRoutes] as unknown as RouteRecordRaw[],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

// 重置路由
export function resetRouter() {
  router.getRoutes().forEach((route) => {
    const { name } = route
    if (name && !WHITE_NAME_LIST.includes(name as string)) {
      router.hasRoute(name) && router.removeRoute(name)
    }
  })
}

export function setupRouter(app: App<Element>) {
  // TODO: 添加路由守卫
  // RouterGuardBuilder(router)
  app.use(router)
}

export default router

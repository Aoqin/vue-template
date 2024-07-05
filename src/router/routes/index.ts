import type { AppRouteModule } from '../type'
import { NotFound, Redirect } from './basic'

const modules = import.meta.glob('./modules/**/*.ts', { eager: true })

const routeModuleList: AppRouteModule[] = []

Object.keys(modules).forEach((key) => {
  const mod = (modules[key] as Record<string, any>).default || {}
  const modList = Array.isArray(mod) ? [...mod] : [mod]
  routeModuleList.push(...modList)
})

const asyncRoutes: AppRouteModule[] = [...routeModuleList]

// NOT FOUND 放到最后
export const basicRoutes = [...asyncRoutes, Redirect, NotFound]

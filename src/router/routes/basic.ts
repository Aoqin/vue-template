import type { AppRouteRecordRaw } from '@/router/type'

export const NotFound: AppRouteRecordRaw = {
  path: '/:pathMatch(.*)*',
  name: 'NotFound',
  meta: {},
  component: () => import('@/views/sys/notFound/index.vue')
}

export const Redirect: AppRouteRecordRaw = {
  path: '/redirct',
  name: 'Redirect',
  meta: {},
  component: () => import('@/views/sys/redirect/index.vue')
}

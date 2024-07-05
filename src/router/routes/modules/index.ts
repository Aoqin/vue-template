import Layout from '@/layouts/defaultLayout.vue'
import type { AppRouteModule } from '@/router/type'

const dashboardAnalysysic = () => import('@/views/dashboard/index.vue')

const IndexScreen: AppRouteModule = {
  path: '/dashboard',
  name: 'Dashboard',
  component: Layout,
  redirect: '/dashboard/analysysic',
  meta: {},
  children: [
    {
      path: 'analysysic',
      name: 'Analysysic',
      component: dashboardAnalysysic,
      meta: {}
    }
  ]
}

export default IndexScreen

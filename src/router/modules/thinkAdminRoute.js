import Layout from '@/layout'

const thinkAdminRoute = [
  {
    path: '/test',
    component: Layout,
    meta: { title: 'Test', icon: 'icon', noCache: true },
    children: [
      {
        path: 'test',
        component: () => import('@/views/init-views/icons/index'),
        name: 'Icons',
        meta: { title: 'Icons', icon: 'icon', noCache: true }
      }
    ]
  }
]

export default thinkAdminRoute

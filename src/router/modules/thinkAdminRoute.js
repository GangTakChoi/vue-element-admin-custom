import Layout from '@/layout'

const thinkAdminRoute = [
  {
    path: '/user-mgmt',
    redirect: '/user-mgmt/normal-user',
    component: Layout,
    meta: { title: '회원관리', noCache: true },
    children: [
      {
        path: 'normal-user',
        component: () => import('@/views/user-mgmt/NormalUserList'),
        name: 'Icons',
        meta: { title: '일반회원관리', noCache: true }
      },
      {
        path: 'store-user',
        component: () => import('@/views/user-mgmt/StoreUserList'),
        name: 'Icons',
        meta: { title: '도매회원관리', noCache: true }
      },
      {
        path: 'suspend-user',
        component: () => import('@/views/user-mgmt/SuspendUserList'),
        name: 'Icons',
        meta: { title: '정지회원관리', noCache: true }
      },
      {
        path: 'secession-user',
        component: () => import('@/views/user-mgmt/SecessionUserList'),
        name: 'Icons',
        meta: { title: '탈퇴회원관리', noCache: true }
      }
    ]
  }
]

export default thinkAdminRoute

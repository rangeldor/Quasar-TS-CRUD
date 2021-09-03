import { UserRouteName, UserRoutePath } from 'src/enums/route'
import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Index.vue') }]
  },
  {
    path: UserRoutePath.List,
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: UserRouteName.List,
        meta: {},
        component: () => import('pages/user/List.vue')
      },
      {
        path: UserRoutePath.Create,
        name: UserRouteName.Create,
        meta: {
          create: true
        },
        component: () => import('pages/user/Form.vue')
      },
      {
        path: UserRoutePath.Update,
        name: UserRouteName.Update,
        meta: {
          update: true
        },
        component: () => import('pages/user/Form.vue')
      },
      {
        path: UserRoutePath.View,
        name: UserRouteName.View,
        meta: {
          view: true
        },
        component: () => import('pages/user/Form.vue')
      },
      {
        path: UserRoutePath.Delete,
        name: UserRouteName.Delete,
        component: () => import('pages/user/Remove.vue')
      }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes

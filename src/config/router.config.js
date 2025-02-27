// eslint-disable-next-line
import { UserLayout, BasicLayout, BlankLayout } from '@/layouts'

const RouteView = {
  name: 'RouteView',
  render: h => h('router-view')
}

export const asyncRouterMap = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: 'menu.home' },
    redirect: '/dashboard',
    children: [
      // dashboard
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/Index'),
        meta: { title: 'menu.dashboard', keepAlive: true, icon: 'dashboard', permission: ['dashboard'] }
      },
      // Exception
      // {
      //   path: '/exception',
      //   name: 'exception',
      //   component: RouteView,
      //   redirect: '/exception/403',
      //   meta: { title: 'menu.exception', icon: 'warning', permission: ['exception'] },
      //   children: [
      //     {
      //       path: '/exception/403',
      //       name: 'Exception403',
      //       component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/403'),
      //       meta: { title: 'menu.exception.not-permission', permission: ['exception'] }
      //     },
      //     {
      //       path: '/exception/404',
      //       name: 'Exception404',
      //       component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404'),
      //       meta: { title: 'menu.exception.not-find', permission: ['exception'] }
      //     },
      //     {
      //       path: '/exception/500',
      //       name: 'Exception500',
      //       component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/500'),
      //       meta: { title: 'menu.exception.server-error', permission: ['exception'] }
      //     }
      //   ]
      // },

      // file
      {
        path: '/file',
        name: 'File',
        component: () => import('@/views/File'),
        meta: { title: 'menu.file', icon: 'picture' }
      },

      // torrent
      {
        path: '/torrent',
        component: RouteView,
        redirect: '/torrent/add',
        name: 'Torrent',
        meta: { title: '种子', keepAlive: true, icon: 'appstore' },
        children: [
          {
            path: '/torrent/add',
            name: 'TorrentAdd',
            hidden: false,
            component: () => import('@/views/torrent/TorrentAdd.vue'),
            meta: { title: '添加种子', keepAlive: true }
          }
        ]
      },

      // Anime
      {
        path: '/anime',
        component: RouteView,
        redirect: '/anime/list',
        name: 'anime',
        meta: { title: '番剧', keepAlive: true, icon: 'appstore' },
        children: [
          {
            path: '/anime/detail/:id',
            name: 'AnimeDetail',
            hidden: true,
            component: () => import('@/views/anime/AnimeDetail.vue'),
            meta: { title: '动漫详情', keepAlive: true }
          },
          {
            path: '/anime/save',
            name: 'AnimeSave',
            component: () => import('@/views/anime/AnimeSave'),
            meta: { title: '保存番剧', hideHeader: true },
            hideChildrenInMenu: true
          },
          {
            path: '/anime/list',
            name: 'AnimeList',
            component: () => import('@/views/anime/AnimeList'),
            meta: { title: '番剧列表', hideHeader: true },
            hideChildrenInMenu: true
          }
        ]
      },

      // account
      {
        path: '/account',
        component: RouteView,
        redirect: '/account/subscribe',
        name: 'account',
        meta: { title: 'menu.account', icon: 'user', keepAlive: true, permission: ['user'] },
        children: [
          {
            path: '/account/subscribe',
            name: 'Subscribe',
            component: () => import('@/views/account/AccountSubscribe.vue'),
            meta: { title: '我的订阅' }
          },
          {
            path: '/account/settings',
            name: 'settings',
            component: () => import('@/views/account/Setting'),
            meta: { title: 'menu.account.settings', hideHeader: true, permission: ['user'] },
            hideChildrenInMenu: true
          }
        ]
      },

      // system
      {
        path: '/system',
        name: 'System',
        component: BlankLayout,
        redirect: '/system/options',
        meta: { title: 'menu.system', icon: 'setting' },
        children: [
          {
            path: '/system/options',
            name: 'SystemOptions',
            component: () => import('@/views/system/SystemOptions'),
            meta: { title: 'menu.system.options', hiddenHeaderContent: false }
          }
          // ,
          // {
          //   path: '/system/actionlogs',
          //   name: 'SystemActionLogs',
          //   component: () => import('@/views/system/ActionLogs'),
          //   meta: { title: 'menu.system.actionlogs', hiddenHeaderContent: false }
          // },
          // {
          //   path: '/system/about',
          //   name: 'About',
          //   component: () => import('@/views/system/About'),
          //   meta: { title: 'menu.system.about', hiddenHeaderContent: false }
          // }
        ]
      }

      // // test
      // {
      //   path: '/test',
      //   name: 'Test',
      //   component: () => import('@/views/Test'),
      //   meta: { title: 'menu.test', keepAlive: true, icon: 'bars', permission: ['dashboard'] }
      // }

    ]
  },

  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
      },
      {
        path: '/password/reset',
        name: 'ResetPassword',
        meta: { title: '重置密码' },
        component: () => import('@/views/user/ResetPassword')
      }
    ]
  },

  {
    path: '/option/app/init',
    name: 'OptionAppInit',
    component: () => import('@/views/option/OptionAppInit'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  }
]

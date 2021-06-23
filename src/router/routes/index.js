import { lazy } from 'react'

// ** Document title
const TemplateTitle = '%s - Vuexy React Admin Template'

// ** Default Route
const DefaultRoute = '/home'

// ** Merge Routes
const Routes = [
  {
    path: '/home',
    component: lazy(() => import('../../views/Home'))
  },
  {
    path: '/second-page',
    component: lazy(() => import('../../views/SecondPage'))
  },
  {
    path: '/third-page',
    component: lazy(() => import('../../views/ThirdPage'))
  },
  {
    path: '/fourth-page',
    component: lazy(() => import('../../views/ThirdPage'))
  },
  {
    path: '/fifth-page',
    component: lazy(() => import('../../views/helpdesk'))
  },
  // {
  //   path: '/account',
  //   component: lazy(() => import('../../views/account/content/EditAccount.jsx'))
  // },
  {
    path: '/account',
    component: lazy(() => import('../../views/account-settings/AccountSettings'))
  },
  {
    path: '/login',
    component: lazy(() => import('../../views/login/Login')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/error',
    component: lazy(() => import('../../views/Error')),
    layout: 'BlankLayout'
  }
]

export { DefaultRoute, TemplateTitle, Routes }

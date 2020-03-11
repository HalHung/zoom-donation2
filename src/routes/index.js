/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */

export default [
  {
    path: '/invoice',
    name: 'invoice.index',
    component: () =>
      import('@/pages/Invoice/index')
  },
  {
    path: '/invoice/:no',
    name: 'invoice.showByNo',
    component: () =>
      import('@/pages/Invoice/showByNo')
  },
  {
    path: '/checkout/token',
    name: 'checkout.token',
    component: () =>
      import('@/pages/checkout/token')
  },
  {
    path: '/checkout',
    name: 'checkout.index',
    component: () =>
      import('@/pages/checkout/index')
  },
    {
      path: '/checkout/upgrade',
      name: 'checkout.upgrade',
      component: () =>
        import('@/pages/checkout/upgrade')
    },
    {
      path: '/checkout/plan/:plan',
      name: 'checkout.plan',
      component: () =>
        import('@/pages/checkout/index')
    },
  // Home
  {
    path: '/home',
    name: 'home.index',
    component: () =>
      import('@/pages/Home/Index'),

  },
  // Account
  {
    path: '/account',
    name: 'account.index',
    redirect: '/account/profile',
    component: () =>
      import('@/pages/Account/Index'),
    meta: {
      auth: true,
    },
    children: [{
      path: 'profile',
      name: 'account.profile',
      component: () =>
        import('@/pages/Account/profile'),
    }, ]
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import('@/pages/Account/login'),

    // If the user needs to be a guest to view this page.
    meta: {
      guest: true,
    },
  },

  // Register
  {
    path: '/register',
    name: 'register',
    component: () =>
      import('@/pages/Account/register.vue'),

    // If the user needs to be a guest to view this page.
    meta: {
      guest: true,
    },
  },
  {
    path: '/verification',
    name: 'verification',
    component: () =>
      import('@/pages/Account/verification.vue'),

    // If the user needs to be a guest to view this page.
    meta: {
      guest: true,
    },
  },
  {
    path: '/forgot-password',
    name: 'forgot',
    component: () =>
      import('@/pages/Account/forgot.vue'),

    // If the user needs to be a guest to view this page.
    meta: {
      guest: true,
    },
  },
  {
    path: '/reset-password',
    name: 'reset',
    component: () =>
      import('@/pages/Account/reset.vue'),

    // If the user needs to be a guest to view this page.
    meta: {
      guest: true,
    },
  },
  {
    path: '/page/:slug',
    name: 'page',
    component: () =>
      import('@/pages/Page/common.vue'),
  },
  {
    path: '/',
    redirect: '/home',
  },

  {
    path: '/*',
    redirect: '/home',
  },
];

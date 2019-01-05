import Home from './components/Home.vue';
import Header from './components/Header.vue';

/**
 * This syntax is recognised by webpack.
 * If you have a big app you have to find the balance between loading 1 huge bundle or several smaller bundles.
 * For loading smaller bundles you can use this webpack syntax for lazy loading INSTEAD of imports.
 * It works like a promise: the component is loaded only when it is needed.
 * The last parameter the 'user' is for grouping the components for lazy loading.
 *
 * Check the behaviour on the Network tab of your browsers dev tools.
 */
const User = resolve => {
  require.ensure(['./components/user/User.vue'], () => {
    resolve(require('./components/user/User.vue'));
  }, 'user')
};

const UserStart = resolve => {
  require.ensure(['./components/user/UserStart.vue'], () => {
    resolve(require('./components/user/UserStart.vue'));
  }, 'user')
};

const UserEdit = resolve => {
  require.ensure(['./components/user/UserEdit.vue'], () => {
    resolve(require('./components/user/UserEdit.vue'));
  }, 'user')
};

const UserDetail = resolve => {
  require.ensure(['./components/user/UserDetail.vue'], () => {
    resolve(require('./components/user/UserDetail.vue'));
  }, 'user')
};

const UserWithWatcher = resolve => {
  require.ensure(['./components/user/UserWithWatcher.vue'], () => {
    resolve(require('./components/user/UserWithWatcher.vue'));
  }, 'user')
};

export const routes = [
  {
    path: '',
    components: {
      default: Home,
      'header-top': Header
    },
    name: 'homePageName'
  },
  {
    path: '/user_with_watcher/:id_to_reload',
    components: {
      default: UserWithWatcher,
      'header-top': Header
    },
  },
  {
    path: '/user',
    components: {
      default: User,
      'header-bottom': Header
    },
    children: [
      {
        path: '',
        component: UserStart
      },
      {
        path: ':id',
        component: UserDetail,
        beforeEnter: (to, from, next) => {
          console.log('inside route setup');
          next();
        }
      },
      {
        path: ':id/edit',
        component: UserEdit,
        name: 'userEditName'
      },
    ]
  },
  {
    path: '*',
    redirect: '/'
  }
];

export default [
  {
    label: 'Home',
    path: '/',
    component: 'Home',
    exact: true
  },
  {
    label: 'Login',
    path: '/login',
    component: 'Login'
  },
  {
    label: 'My Account',
    path: '/my-account',
    component: 'MyAccount',
    isPrivate: true
  }
];

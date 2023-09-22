import React from 'react';
import { Outlet } from 'react-router-dom';

import DefaultNavbar from '@components/DefaultNavbar';

function Layout() {
  return (
    <>
      <DefaultNavbar />
      <Outlet />
    </>
  );
}

export default Layout;

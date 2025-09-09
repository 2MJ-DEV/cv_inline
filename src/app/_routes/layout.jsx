import React from 'react';
import { Outlet } from 'rasengan';

const AppLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AppLayout;

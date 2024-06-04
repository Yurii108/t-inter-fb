import React, { Suspense } from "react";
import { Outlet } from "react-router";

import Links from "./tabs";

export const Layout: React.FC = () => {
  return (
    <>
      <Links />
      <Suspense fallback={"loading page..."}>
        <Outlet />
      </Suspense>
    </>
  );
};

import React, { lazy } from "react";
import { Layout } from "../../layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const PageOne = lazy(() => import("../../layout/pageOne"));
const PageTwo = lazy(() => import("../../layout/pageTwo"));

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PageOne />} />
          <Route path="/page-two" element={<PageTwo />} />
          <Route path="*" element={<h1>404</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

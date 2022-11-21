import { memo } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { useAppSelector } from "store/hooks";

import { privateRoutes, publicRoutes } from "./helper";

const RouteProtection = () => {
  const { token } = useAppSelector((state) => state?.app);
  console.log(token);
  return (
    <>
      {!token ? (
        <Routes>
          {publicRoutes?.map(({ path, element }, index) => (
            <Route key={index} path={path} element={element} />
          ))}
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      ) : (
        <Routes>
          {privateRoutes?.map(({ path, element }, index) => (
            <Route key={index} path={path} element={element} />
          ))}
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      )}
    </>
  );
};

export default memo(RouteProtection);

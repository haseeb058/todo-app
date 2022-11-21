/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Link, useLocation } from "react-router-dom";

import Button from "components/button";
import { adminSidebarList, useSideBar } from "./helper";

import logoutIcon from "assets/icons/logout-icon.svg";
import style from "./sidebar.module.scss";

const Sidebar = () => {
  const { pathname } = useLocation();

  const { handleLogout } = useSideBar();

  return (
    <>
      <div className={style.sidebarCard}>
        <ul>
          {adminSidebarList.map(({ title, path, icon, unSelectIcon }) => (
            <li className={style.menuList} key={title}>
              <Link
                to={path}
                key={title}
                className={pathname === path ? style.active : ""}
              >
                <img
                  src={pathname === path ? icon : unSelectIcon}
                  width={22}
                  height={22}
                  alt={"icon"}
                />
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <Button
          title={"Logout"}
          icon={logoutIcon}
          className={style.btnLogout}
          onClick={handleLogout}
        />
      </div>
    </>
  );
};

export default Sidebar;

import React, { useState } from "react";

import Sidebar from "./sidebar";

import style from "./layout.module.scss";

const Layout = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className={style.layoutWrapper}>
      <aside className={openSidebar ? style.sideBarOpen : ""}>
        <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      </aside>

      <main>
        <div className={style.mainWrapper}>{children}</div>
      </main>
    </div>
  );
};

export default Layout;

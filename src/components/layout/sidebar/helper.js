import { useNavigate } from "react-router-dom";

import { store, setToken } from "store/index";

import taskIcon from "assets/icons/list-icon.svg";
import locationIcon from "assets/icons/location-icon.svg";
import taskBlackIcon from "assets/icons/list-black-icon.svg";
import locationBlackIcon from "assets/icons/location-black-icon.svg";

export const adminSidebarList = [
  {
    title: "Task",
    path: "/",
    icon: taskIcon,
    unSelectIcon: taskBlackIcon,
  },
  {
    title: "Location",
    path: "/location",
    icon: locationIcon,
    unSelectIcon: locationBlackIcon,
  },
];

export const useSideBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    store.dispatch(
      setToken({
        token: false,
      })
    );
    navigate("/");
  };

  return {
    handleLogout,
  };
};

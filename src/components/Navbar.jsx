import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";

import { useDispatch, useSelector } from "react-redux";
import { setActiveMenu, setScreenSize } from "../redux/services/sidebarSlice";


const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <button
    type="button"
    onClick={() => customFunc()}
    style={{ color }}
    className="relative text-xl rounded-full p-3 hover:bg-light-gray"
  >
    <span
      style={{ background: dotColor }}
      className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
    />
    {icon}
  </button>
);

const Navbar = () => {
  const dispatch = useDispatch();
  const currentColor = useSelector((state) => state.sidebar.currentColor);
  const activeMenu = useSelector((state) => state.sidebar.activeMenu);
  const isClicked = useSelector((state) => state.sidebar.isClicked);
  const screenSize = useSelector((state) => state.sidebar.screenSize);

  useEffect(() => {
    const handleResize = () => {
      dispatch(setScreenSize(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]);

  useEffect(() => {
    if (screenSize <= 900) {
      dispatch(setActiveMenu(false));
    } else {
      dispatch(setActiveMenu(true));
    }
  }, [dispatch, screenSize]);

  const handleActiveMenu = () => {
    dispatch(setActiveMenu(!activeMenu));
  };

  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
      <NavButton
        title="Menu"
        customFunc={handleActiveMenu}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />
      <div className="flex">
        <NavButton
          title="Cart"
          customFunc={() => dispatch(toggleCart())}
          color={currentColor}
          icon={<FiShoppingCart />}
        />
        <NavButton
          title="Chat"
          dotColor="#03C9D7"
          customFunc={() => dispatch(toggleChat())}
          color={currentColor}
          icon={<BsChatLeft />}
        />
        <NavButton
          title="Notification"
          dotColor="rgb(254, 201, 15)"
          customFunc={() => dispatch(toggleNotification())}
          color={currentColor}
          icon={<RiNotification3Line />}
        />
        <div
          className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
          onClick={() => dispatch(toggleUserProfile())}
        >
          {/* <img
            className="rounded-full w-8 h-8"
            src={avatar}
            alt="user-profile"
          /> */}
          <button>abc</button>
          <p>
            <span className="text-gray-900 text-14">Hi,</span>{" "}
            <span className="text-gray-400 font-bold ml-1 text-14">
              Michael
            </span>
          </p>
          <MdKeyboardArrowDown className="text-gray-400 text-14" />
        </div>

        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;

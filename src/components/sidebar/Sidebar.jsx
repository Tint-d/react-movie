import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineSearch, AiOutlineHome, AiFillEye } from "react-icons/ai";
import {
  FiShoppingBag,
  FiEdit,
  FiPieChart,
  FiBarChart,
  FiCreditCard,
  FiStar,
  FiShoppingCart,
} from "react-icons/fi";
import {
  BsKanban,
  BsBarChart,
  BsBookmarkHeartFill,
  BsBoxSeam,
  BsCurrencyDollar,
  BsShield,
  BsChatLeft,
} from "react-icons/bs";
import { BiColorFill, BiLogIn } from "react-icons/bi";
import { IoMdContacts } from "react-icons/io";
import { RiContactsLine, RiStockLine } from "react-icons/ri";
import { TbHistory } from "react-icons/tb";
import { HiOutlineRefresh } from "react-icons/hi";
import { TiTick } from "react-icons/ti";
import { GiLouvrePyramid } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import "./sidebar.css";
import { setActiveMenu } from "../../redux/services/sidebarSlice";

const Sidebar = () => {
  const currentColor = useSelector((state) => state.sidebar.currentColor);
  const screenSize = useSelector((state) => state.sidebar.screenSize);
  const activeMenu = useSelector((state) => state.sidebar.activeMenu);
  const dispatch = useDispatch();

  const handleCloseSidebar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      dispatch(setActiveMenu(false));
    }
  };

  const links = [
    {
      title: "MENU",
      links: [
        {
          name: "Home",
          icon: <AiOutlineHome />,
        },
        {
          name: "Explore",
          icon: <AiFillEye />,
        },
        {
          name: "Search",
          icon: <AiOutlineSearch />,
        },
      ],
    },

    {
      title: "PERSONAL",
      links: [
        {
          name: "Bookmarked",
          icon: <BsBookmarkHeartFill />,
        },
        {
          name: "History",
          icon: <TbHistory />,
        },
      ],
    },
    {
      title: "GENERAL",
      links: [
        {
          name: "Profile",
          icon: <CgProfile />,
        },
        {
          name: "Login",
          icon: <BiLogIn />,
        },
      ],
    },
  ];

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <div className="ml-3 h-screen md:overflow-hidden shadow-lg p-5 custom-scrollbar overflow-y-scroll md:hover:overflow-auto  scrollbar-w-0  pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={handleCloseSidebar}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <SiShopware /> <span>MOONLIGHT</span>
            </Link>

            {/* <button
              type="button"
              onClick={() => dispatch(setActiveMenu(!activeMenu))}
              style={{ color: currentColor }}
              className="text-xl rounded-full p-3 hover:bg-blue-500 mt-4 block md:hidden"
            >
              <MdOutlineCancel />
            </button> */}
          </div>
          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSidebar}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : "",
                    })}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;

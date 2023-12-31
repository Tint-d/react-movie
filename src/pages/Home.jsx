import React, { useEffect, useState } from "react";
import Movies from "./Movies";
import TvShow from "./TvShow";
import { Tabs } from "@mantine/core";
import { CgProfile } from "react-icons/cg";
import Button from "../components/Button";
import Sidebar from "../components/sidebar/Sidebar";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const Home = () => {
  const [currentTab, setCurrentTab] = useState(
    localStorage.getItem("currentTab") || "tv"
  );
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMWFlMGVlZTY5ZDBkYTg0ZjUxMDY1ODdiZWZjZTJkMCIsInN1YiI6IjYzNjIzMTRhMGMzZWM4MDA5MGI1ZmQ0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SIBSF6zJS5w5ZU8UVdiZGGs6evh16QyHREjmDDnMm-o";
  useEffect(() => {
    Cookies.set("token", token);
  }, []);

  return (
    <div className="">
      <div className="flex md:hidden justify-between items-center px-5 my-5">
        <Link to="/" className="flex gap-2 items-center">
          <p className="text-xl text-white font-medium tracking-wider uppercase">
            Moon<span className="text-primary">light</span>
          </p>
        </Link>
        {/* <button onClick={() => setIsSidebarActive((prev) => !prev)}>
        </button> */}
        <GiHamburgerMenu size={25} />
      </div>

      <div className="flex items-start">
        <Sidebar
        // onCloseSidebar={() => setIsSidebarActive(false)}
        // isSidebarActive={isSidebarActive}
        />

        <div
          // @ts-ignore
          // ref={parent}
          className="flex-grow md:pt-7 pt-0 pb-7 border-x md:px-[2vw] px-[4vw] border-gray-darken min-h-screen"
        >
          <div className="flex justify-between md:items-end items-center">
            <div className="inline-flex gap-[40px] pb-[14px] border-b border-gray-darken relative">
              <button
                onClick={() => {
                  setCurrentTab("tv");
                  localStorage.setItem("currentTab", "tv");
                }}
                className={`${
                  currentTab === "tv" &&
                  "text-gray-700 font-medium after:absolute after:bottom-0 after:left-[13%] after:bg-white after:h-[3px] after:w-5"
                } transition duration-300 hover:text-blue-gray-400`}
              >
                TV Show
              </button>
              <button
                onClick={() => {
                  setCurrentTab("movie");
                  localStorage.setItem("currentTab", "movie");
                }}
                className={`${
                  currentTab === "movie" &&
                  "text-gray-700 font-medium after:absolute after:bottom-0 after:right-[9%] after:bg-white after:h-[3px] after:w-5"
                } transition duration-300 hover:text-blue-gray-400`}
              >
                Movie
              </button>
            </div>
            <div className="flex gap-6 items-center">
              <div className="w-6 h-6 rounded-full flex justify-center items-center border border-gray-lighten  cursor-pointer">
                <IoMdNotificationsOutline size={17} />
              </div>
              <p>{"Anonymous"}</p>
              <img
                className=" w-7 h-7 rounded-full object-cover"
                src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"
                alt=""
              />
            </div>
          </div>

          {currentTab === "tv" && <TvShow />}
          {currentTab === "movie" && <Movies />}
        </div>

        {/* <div className="shrink-0 max-w-[310px] w-full hidden lg:block px-6 top-0 sticky ">
          <SearchBox />
          <RecommendGenres currentTab={currentTab} />
          <TrendingNow />
        </div> */}
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default Home;

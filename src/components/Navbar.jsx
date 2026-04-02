import React from "react";
import "remixicon/fonts/remixicon.css";

const Navbar = ({ setClick }) => {
  return (
    <div className="flex h-[60px] w-full justify-between bg-white px-6 py-4">
      <div className="flex w-[50%] items-center gap-4">
        <i
          onClick={() => setClick((prev) => !prev)}
          className="ri-menu-line text-2xl font-bold"
        ></i>
        <div className="relative flex w-[250px] items-center">
          <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"></i>
          <input
            className="w-[250px] rounded-2xl bg-[#f3f4f6] p-1.5 pl-10 pr-2"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="flex gap-5 font-thin">
          <h1>Mega Menu</h1>
          <h1>Resources</h1>
        </div>
      </div>

      <div className="flex gap-8 text-xl text-black">
        <i className="ri-notification-3-line"></i>
        <i className="ri-chat-4-line"></i>
        <div>
          <img
            className="h-[25px] w-[25px] rounded-4xl"
            src="https://demo.adminkit.io/img/flags/us.png"
            alt=""
          />
        </div>
        <i className="ri-fullscreen-line"></i>
        <img src="https://demo.adminkit.io/img/avatars/avatar.jpg" alt="" />
      </div>
    </div>
  );
};

export default Navbar;

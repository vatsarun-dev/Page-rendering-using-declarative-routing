import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Side = ({ click }) => {
  const [showDashboardMenu, setShowDashboardMenu] = useState(false);
  const [showPagesMenu, setShowPagesMenu] = useState(false);
  const [showAuthMenu, setShowAuthMenu] = useState(false);

  const items = [
    { label: "Projects", path: "/Project" },
    { label: "Clients", path: "/Clients" },
    { label: "Order", path: "/Order" },
    { label: "Pricing", path: "/Pricing" },
    { label: "Chat", path: "/Chat" },
    { label: "Blank", path: "/Blank" },
  ];
  ["Reset Password", "404 Page", "500 Page"];

  const auth = [
    { label: "ResetYourPassword", path: "/ResetYourPassword" },
    { label: "Page404", path: "/Page404" },
    { label: "Page500", path: "/Page500" },
  ];

  return click ? (
    <div className="flex min-h-screen w-[250px] flex-col gap-5 bg-[#232e3c] p-3 text-white">
      <div className="relative">
        <h1 className="relative inline-block text-xl font-bold">
          AdminKit
          <span className="absolute -right-10 top-0 rounded bg-blue-500 px-1 py-0.5 text-[10px] font-semibold uppercase text-white">
            Pro
          </span>
        </h1>
      </div>

      <div className="flex gap-2">
        <img
          className="w-[40px]"
          src="https://demo.adminkit.io/img/avatars/avatar.jpg"
          alt=""
        />
        <div className="text-xs">
          <h1>Name</h1>
          <h1>Designation</h1>
        </div>
      </div>

      <div>
        <h1 className="text-sm font-thin text-gray-400">Pages</h1>

        {/* dashboard */}

        <div className="mt-2 flex flex-col">
          <button
            type="button"
            onClick={() => setShowDashboardMenu(!showDashboardMenu)}
            className="flex items-center justify-between rounded px-2 text-left text-gray-200 transition hover:bg-[#2d3a4d]"
          >
            <span className="flex items-center gap-3 text-sm font-thin">
              <i className="ri-sound-module-line"></i>
              <span>Dashboard</span>
            </span>
            <span className="text-sm">
              {showDashboardMenu ? (
                <i className="text-xl ri-arrow-drop-up-line"></i>
              ) : (
                <i className="text-xl ri-arrow-drop-down-line"></i>
              )}
            </span>
          </button>

          {showDashboardMenu && (
            <div className="mt-2 flex flex-col gap-1 text-xs text-gray-300">
              <button
                type="button"
                className="flex items-center gap-4 rounded px-2 py-1 text-left hover:bg-[#2d3a4d]"
              >
                <span className="text-lg">&rarr;</span>
                <NavLink to="/Analysit">Analyist</NavLink>
              </button>

              <button
                type="button"
                className="flex items-center justify-between rounded px-2 py-1 text-left hover:bg-[#2d3a4d]"
              >
                <span className="flex items-center gap-4">
                  <span className="text-lg text-gray-400">&rarr;</span>
                  <NavLink to="/ECommerce">E-Commerce</NavLink>
                </span>
                <span className="rounded bg-blue-600 px-2 py-1 text-[10px] font-semibold uppercase text-white">
                  Pro
                </span>
              </button>

              <button
                type="button"
                className="flex items-center justify-between rounded px-2 py-1 text-left hover:bg-[#2d3a4d]"
              >
                <span className="flex items-center gap-4">
                  <span className="text-lg text-gray-400">&rarr;</span>
                  <NavLink to="/Crypto">Crypto</NavLink>{" "}
                </span>
                <span className="rounded bg-blue-600 px-2 py-1 text-[10px] font-semibold uppercase text-white">
                  Pro
                </span>
              </button>
            </div>
          )}
        </div>

        {/*pages  */}

        <div className="mt-2 flex flex-col">
          <button
            type="button"
            onClick={() => setShowPagesMenu(!showPagesMenu)}
            className="flex items-center justify-between rounded px-2 text-left text-gray-200 transition hover:bg-[#2d3a4d]"
          >
            <span className="flex items-center gap-3 text-sm font-thin">
              <i className="ri-sound-module-line"></i>
              <span>Pages</span>
            </span>
            <span className="text-sm">
              {showPagesMenu ? (
                <i className="text-xl ri-arrow-drop-up-line"></i>
              ) : (
                <i className="text-xl ri-arrow-drop-down-line"></i>
              )}
            </span>
          </button>

          {showPagesMenu && (
            <div className="mt-2 flex flex-col gap-1 text-xs text-gray-300">
              <button
                type="button"
                className="flex items-center gap-4 rounded px-2 py-1 text-left hover:bg-[#2d3a4d]"
              >
                <span className="text-lg">&rarr;</span>
                <NavLink to="/Setting">Setting</NavLink>
              </button>

              {items.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded px-2 py-1 text-left hover:bg-[#2d3a4d] ${
                      isActive ? "bg-[#2d3a4d]" : ""
                    }`
                  }
                >
                  <span className="flex items-center gap-4">
                    <span className="text-lg text-gray-400">&rarr;</span>
                    <span>{item.label}</span>
                  </span>
                  <span className="rounded bg-blue-600 px-2 py-1 text-[10px] font-semibold uppercase text-white">
                    Pro
                  </span>
                </NavLink>
              ))}
            </div>
          )}
        </div>

        {/* profile */}

        <div className="mt-3 flex gap-2 px-2 py-1 text-sm font-thin">
          <i className="ri-user-line"></i>
          <NavLink to="/Profile">Profile</NavLink>
        </div>

        {/* invoice */}

        <div className="mt-3 flex gap-2 px-2 py-1 text-sm font-thin">
          <i className="ri-bank-card-2-fill"></i>
          <NavLink to="/Invoice">Invoice</NavLink>
        </div>

        {/* tasks */}

        <div className="mt-3 flex justify-between gap-2 px-2 py-1 text-sm font-thin">
          <div className="flex gap-2">
            <i className="ri-list-check"></i>
            <NavLink to="/Task">Task</NavLink>
          </div>
          <span className="rounded bg-blue-600 px-1 py-1 text-[10px] font-semibold uppercase text-white">
            Pro
          </span>
        </div>

        {/* calender */}

        <div className="mt-3 flex justify-between gap-2 px-2 py-1 text-sm font-thin">
          <div className="flex gap-2">
            <i className="ri-calendar-line"></i>
            <NavLink to="/CalendarPage">Calendar</NavLink>
          </div>
          <span className="rounded bg-blue-600 px-1 py-1 text-[10px] font-semibold uppercase text-white">
            Pro
          </span>
        </div>

        {/* auth */}

        <div className="mt-2 flex flex-col">
          <button
            type="button"
            onClick={() => setShowAuthMenu(!showAuthMenu)}
            className="flex items-center justify-between rounded px-2 text-left text-gray-200 transition hover:bg-[#2d3a4d]"
          >
            <span className="flex items-center gap-3 text-sm font-thin">
              <i className="ri-sound-module-line"></i>
              <span>Auth</span>
            </span>
            <span className="text-sm">
              {showAuthMenu ? (
                <i className="text-xl ri-arrow-drop-up-line"></i>
              ) : (
                <i className="text-xl ri-arrow-drop-down-line"></i>
              )}
            </span>
          </button>

          {showAuthMenu && (
            <div className="mt-2 flex flex-col gap-1 text-xs text-gray-300">
              <button
                type="button"
                className="flex items-center gap-4 rounded px-2 py-2 text-left hover:bg-[#2d3a4d]"
              >
                <span className="text-lg">&rarr;</span>
                <NavLink to="/Signin">Sign-In</NavLink>
              </button>
              <button
                type="button"
                className="flex items-center gap-4 rounded px-2 py-2 text-left hover:bg-[#2d3a4d]"
              >
                <span className="text-lg">&rarr;</span>
                <NavLink to="/Signup">Sign-Up</NavLink>
              </button>
              {auth.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded px-2 py-1 text-left hover:bg-[#2d3a4d] ${
                      isActive ? "bg-[#2d3a4d]" : ""
                    }`
                  }
                >
                  <span className="flex items-center gap-4">
                    <span className="text-lg">&rarr;</span>
                    <span>{item.label}</span>
                  </span>
                  <span className="rounded bg-blue-600 px-2 py-1 text-[10px] font-semibold uppercase text-white">
                    Pro
                  </span>
                </NavLink>
              ))}
            </div>
          )}
        </div>
      </div>

      <div>
        <h1 className="text-xs font-thin">Components</h1>
      </div>
    </div>
  ) : null;
};

export default Side;

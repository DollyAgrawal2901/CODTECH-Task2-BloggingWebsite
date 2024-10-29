import logo from "../imgs/book.png"; // Assuming the logo file you want to use
import { Link, Outlet } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../App";
import UserNavigationPanel from "./user-navigation.component";

export default function Navbar() {
  const [searchBoxVisibility, setSearchBoxVisibility] = useState(false);

  const [userNavPanel, setUserNavPanel] = useState(false);

  const {
    userAuth,
    userAuth: { access_token, profile_img },
  } = useContext(UserContext);

  const handleUserNavPanel = () => {
    setUserNavPanel((currentVal) => !currentVal);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setUserNavPanel(false);
    }, 200);
  };

  return (
    <>
      <nav className="flex items-center justify-between py-1 bg-[#175c61] text-white shadow-md">
        {/* Logo and "Thinkker" Text Section */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Logo"
            className="h-[50px] md:h-[60px] object-contain"
            style={{ maxWidth: "50px" }} // Adjust as needed
          />
          <span className="text-2xl font-semibold text-green-200">
            Thinkker
          </span>
        </Link>

        {/* Navigation Links (with Write) */}
        <div className="flex space-x-4">
          <Link to="/home" className="hover:text-gray-300">
            Home
          </Link>
          <Link
            to="/editor"
            className="flex items-center space-x-1 hover:text-gray-300"
          >
            <i className="text-xl">✍️</i>
            <p>Write</p>
          </Link>
        </div>

        {/* Search Input */}
        <div className="relative flex-grow max-w-md mx-4">
          <input
            type="text"
            placeholder="Search this site"
            className="w-full px-4 py-2 pl-10 border rounded-full bg-gray-200 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <i className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
            🔍
          </i>
        </div>

        {access_token ? (
          <>
            <Link to="/dashboard/notification">
              <button className="w-12 h-12 rounded-full">
                <i className="fi fi-rr-bell text-2xl block mt-1"></i>
              </button>
            </Link>

            <div
              className="relative"
              onClick={handleUserNavPanel}
              onBlur={handleBlur}
            >
              <button className="w-12 h-12 mt-1 mr-10">
                <img
                  src={profile_img}
                  className="w-full h-full object-cover rounded-full"
                />
              </button>

              {userNavPanel && (
                <div className="absolute right-0 top-full mt-2 z-10">
                  <UserNavigationPanel />
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            {/* Sign In and Sign Up Section */}
            <div className="flex items-center space-x-6 mr-4">
              <Link
                to="/signin"
                className="px-4 py-1 border border-white rounded-full hover:bg-gray-700 transition-colors"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="px-4 py-1 bg-white text-black rounded-full hover:bg-gray-300 transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </>
        )}
      </nav>

      {/* Content Below Navbar */}
      <div className="">
        <Outlet />
      </div>
    </>
  );
}

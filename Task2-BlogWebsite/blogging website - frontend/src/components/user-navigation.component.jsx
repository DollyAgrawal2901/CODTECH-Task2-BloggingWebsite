import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
import { removeFromSession } from "../common/session";

export default function UserNavigationPanel() {
  const {
    userAuth: { username },
    setUserAuth,
  } = useContext(UserContext);

  const signOutUser = () => {
    removeFromSession("user");
    setUserAuth({ access_token: null });
  };

  return (
    <div className="flex flex-col items-center p-6 bg-lime-100 rounded-lg shadow-lg w-[200px] max-w-sm mx-auto space-y-4 px-10 ">
      <Link
        to="/editor"
        className="flex items-center space-x-2 text-gray-800 hover:text-red-800 transition duration-300"
      >
        {/* <i className="fi fi-rr-file-edit text-xl "></i> */}
        <p className="text-lg font-medium">Write</p>
      </Link>

      <Link
        to={`/user/${username}`}
        className="text-gray-800 hover:text-red-800 text-lg transition duration-300 font-medium"
      >
        Profile
      </Link>

      <Link
        to="/dashboard/blogs"
        className="text-gray-800 hover:text-red-800 text-lg transition duration-300 font-medium"
      >
        Dashboard
      </Link>

      <Link
        to="/settings/edit-profile"
        className="text-gray-800 hover:text-red-800 text-lg transition duration-300 font-medium"
      >
        Settings
      </Link>

      <span className="w-full border-t border-gray-300 my-4"></span>

      <button
        onClick={signOutUser}
        className="w-full flex flex-col items-center bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-800 transition duration-300"
      >
        <h1 className="font-semibold text-lg">Sign Out</h1>
        <p className="text-sm">@{username}</p>
      </button>
    </div>
  );
}

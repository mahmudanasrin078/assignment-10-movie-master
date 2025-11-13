// //import React, { use } from "react";
// import React, { useContext, useEffect, useState } from "react";
// import { Link, NavLink } from "react-router";
// import { AuthContext } from "../context/AuthContext";
// import { toast } from "react-toastify";
// import { HashLoader } from "react-spinners";

// const Navbar = () => {
//   const { user, logOutUserFunc, setUser, loading } = useContext(AuthContext);
//   // console.log(user);

//    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

//   const handleLogout = () => {
//     logOutUserFunc()
//       .then(() => {
//         toast.success("Logout successful");
//         setUser(null);
//       })
//       .catch((e) => {
//         console.log(e);
//         toast.error(e.message);
//       });
//   };

// // theme

//   useEffect(() => {
//     const html = document.querySelector("html");
//     html.setAttribute("data-theme", theme);
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   const handleTheme = (checked) => {
//     setTheme(checked?'dark':'light')

//   };

//   return (
//     <div>
//       <div className="  md:flex justify-center md:justify-between items-center w-11/12 mx-auto my-5 ">
//         <div className=" text-2xl flex md:justify-between items-center gap-1 my-3 md:my-0">
//           <h2 className="font-bold">
//             Movie <span className="text-[#4f18db]">Master</span>
//           </h2>
//         </div>
//         <div className="nav flex gap-5 text-accent my-3 md:my-0">
//           <NavLink
//             to={"/"}
//             className={({ isActive }) =>
//               isActive ? "active-link" : "inactive-link"
//             }
//           >
//             {" "}
//             Home
//           </NavLink>

//           <NavLink
//             to={"/all-movies"}
//             className={({ isActive }) =>
//               isActive ? "active-link" : "inactive-link"
//             }
//           >
//             {" "}
//             All Movies
//           </NavLink>

//           {/* protected profile */}

//           {user && (
//             <NavLink
//               to={"/add-movie"}
//               className={({ isActive }) =>
//                 isActive ? "active-link" : "inactive-link"
//               }
//             >
//               {" "}
//               Add Movies
//             </NavLink>
//           )}
//           {user && (
//             <NavLink
//               to={"/my-collection"}
//               className={({ isActive }) =>
//                 isActive ? "active-link" : "inactive-link"
//               }
//             >
//               {" "}
//               My Collection
//             </NavLink>
//           )}
//           {/* profile */}

//           {/* watchlist */}

//           {user && (
//             <NavLink
//               to={"/my-watchList"}
//               className={({ isActive }) =>
//                 isActive ? "active-link" : "inactive-link"
//               }
//             >
//               {" "}
//               My WatchList
//             </NavLink>
//           )}
//         </div>

//         {loading ? (
//           <HashLoader />
//         ) : user ? (
//           <div className="text-center space-y-3 p-3">
//             {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
//             {/* For TSX uncomment the commented types below */}
//             <button
//               className="btn"
//               popoverTarget="popover-1"
//               style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}
//             >
//               {/* Theme Toggling Button   */}
//               <div>
//                 <input
//                   onChange={(e) => handleTheme(e.target.checked)}
//                   type="checkbox"
//                   defaultChecked={localStorage.getItem("theme") === "dark"}
//                   className="toggle"
//                 />
//               </div>

//               <img
//                 className="h-[30px] w-[30px] rounded-full mx-auto  "
//                 src={
//                   user?.photoURL ||
//                   "https://img.icons8.com/?size=96&id=8vsjJt13MQHk&format=png"
//                 }
//                 alt="user"
//                 title={user?.displayName ? user.displayName : ""}
//               />
//             </button>

//             <div
//               className="dropdown -ml-48 menu w-52 rounded-box bg-base-100 shadow-sm"
//               popover="auto"
//               id="popover-1"
//               style={
//                 { positionAnchor: "--anchor-1" } /* as React.CSSProperties */
//               }
//             >
//               <h2 className="text-xl font-semibold ">{user?.displayName}</h2>
//               <p className="text-xs font-semibold text-black">{user?.email}</p>
//               <li className="mt-3">
//                 <Link to={"/profile"}>Profile</Link>
//               </li>
//               <button
//                 onClick={handleLogout}
//                 className="btn bg-primary text-white w-full"
//               >
//                 Logout
//               </button>
//             </div>
//           </div>
//         ) : (
//           <div>
//             <Link to="/login-pages" className="btn btn-primary px-10 mr-3">
//               Login
//             </Link>
//             <Link to="/register-page" className="btn btn-primary px-10">
//               Register
//             </Link>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// -------------------

import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { HashLoader } from "react-spinners";

const Navbar = () => {
  const { user, logOutUserFunc, setUser, loading } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logOutUserFunc()
      .then(() => {
        toast.success("Logout successful");
        setUser(null);
      })
      .catch((e) => {
        console.log(e);
        toast.error(e.message);
      });
  };

  // theme setup
  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <div className="shadow-md bg-base-100 sticky top-0 z-50 border-b border-gray-300 dark:border-gray-700">
      <div className="flex justify-between items-center w-11/12 mx-auto py-3">
        {/* Left Side*/}
        <div className="flex items-center gap-3">
          {/*  */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl lg:hidden focus:outline-none"
          >
            {menuOpen ? "✖" : "☰"}
          </button>

          <h2 className="text-2xl font-bold text-base-content">
            Movie <span className="text-red-500">Master</span>
          </h2>
        </div>

        {/* Middle */}
        <div className="hidden lg:flex gap-6 text-base-content font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-pink-500 font-semibold"
                : "hover:text-red-500 font-semibold transition"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/all-movies"
            className={({ isActive }) =>
              isActive
                ? "text-pink-500 font-semibold"
                : "hover:text-red-500 font-semibold transition"
            }
          >
            All Movies
          </NavLink>
          {user && (
            <>
              <NavLink
                to="/add-movie"
                className={({ isActive }) =>
                  isActive
                    ? "text-pink-500 font-semibold"
                    : "hover:text-red-500 font-semibold transition"
                }
              >
                Add Movies
              </NavLink>
              <NavLink
                to="/my-collection"
                className={({ isActive }) =>
                  isActive
                    ? "text-pink-500 font-semibold"
                    : "hover:text-red-500 font-semibold transition"
                }
              >
                My Collection
              </NavLink>
              <NavLink
                to="/my-watchList"
                className={({ isActive }) =>
                  isActive
                    ? "text-pink-500 font-semibold"
                    : "hover:text-red-500 font-semibold transition"
                }
              >
                My WatchList
              </NavLink>
            </>
          )}
        </div>

        {/* === Right Side (Theme + Auth Buttons) === */}
        <div className="flex items-center gap-3">
          {/* Theme toggle for md+ */}
          <div className="hidden md:block">
            <input
              onChange={(e) => handleTheme(e.target.checked)}
              type="checkbox"
              defaultChecked={localStorage.getItem("theme") === "dark"}
              className="toggle"
            />
          </div>

          {loading ? (
            <HashLoader />
          ) : user ? (
            <div className="relative">
              <button
                className="btn btn-ghost p-0"
                popoverTarget="popover-1"
                style={{ anchorName: "--anchor-1" }}
              >
                <img
                  className="h-[35px] w-[35px] rounded-full"
                  src={
                    user?.photoURL ||
                    "https://img.icons8.com/?size=96&id=8vsjJt13MQHk&format=png"
                  }
                  alt="user"
                  title={user?.displayName || ""}
                />
              </button>
              <div
                className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm absolute right-0 mt-2"
                popover="auto"
                id="popover-1"
                style={{ positionAnchor: "--anchor-1" }}
              >
                <h2 className="text-xl font-semibold">{user?.displayName}</h2>
                <p className="text-xs font-semibold text-black dark:text-gray-300">
                  {user?.email}
                </p>
                <li className="mt-3">
                  <Link to={"/profile"}>Profile</Link>
                </li>
                <button
                  onClick={handleLogout}
                  className="btn bg-primary text-white w-full"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link
                to="/login-pages"
                className="btn rounded-full bg-linear-to-r from-pink-500 to-red-600 hover:from-red-600 hover:to-pink-500 text-white  btn-sm px-5 text-sm"
              >
                Login
              </Link>
              <Link
                to="/register-page"
                className="btn rounded-full bg-linear-to-r from-pink-500 to-red-600 hover:from-red-600 hover:to-pink-500 text-white  btn-sm px-5 text-sm"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* === Mobile & Tablet Dropdown Menu === */}
      <div
        className={`transition-all duration-300 ease-in-out bg-base-100 border-t border-gray-300 dark:border-gray-700 lg:hidden ${
          menuOpen
            ? "opacity-100 visible py-3"
            : "opacity-0 invisible h-0 overflow-hidden"
        }`}
      >
        <div
          className={`flex flex-col md:flex-row justify-center items-center gap-4 text-base-content`}
        >
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-pink-500 font-semibold"
                : "hover:text-red-500 font-semibold transition"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/all-movies"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-pink-500 font-semibold"
                : "hover:text-red-500 font-semibold transition"
            }
          >
            All Movies
          </NavLink>
          {user && (
            <>
              <NavLink
                to="/add-movie"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-pink-500 font-semibold"
                    : "hover:text-red-500 font-semibold transition"
                }
              >
                Add Movies
              </NavLink>
              <NavLink
                to="/my-collection"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-pink-500 font-semibold"
                    : "hover:text-red-500 font-semibold transition"
                }
              >
                My Collection
              </NavLink>
              <NavLink
                to="/my-watchList"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-pink-500 font-semibold"
                    : "hover:text-red-500 font-semibold transition"
                }
              >
                My WatchList
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

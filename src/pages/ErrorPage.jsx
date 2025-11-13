import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
  // <div className="text-center">
  //  <h2 className="text-[30px font-bold]">Error 404</h2>
  //   </div>

 <div>
  <title>
    Error Page
  </title>
   <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-6">
      <h1 className="text-9xl font-extrabold text-gray-800">404</h1>
      <p className="text-2xl md:text-3xl font-semibold mt-4 text-gray-700">
        Oops! Page Not Found
      </p>
      <p className="text-gray-500 mt-2 mb-6">
        The page you’re looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Go Home
      </Link>

      {/* Optional illustration */}
      {/* <img src="/images/error-illustration.svg" alt="Error" className="mt-8 w-64" /> */}
    </div>
 </div>
  );
};

export default ErrorPage;

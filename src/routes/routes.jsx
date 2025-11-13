import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";

import Profile from "../pages/Profile";

import LoadingSpinner from "../components/LoadingSpiner";

import LoginPages from "../pages/LoginPages";

import ErrorPage from "../pages/ErrorPage";
import RegisterPage from "../pages/RegisterPage";
import About from "../pages/About";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import AllMovies from "../pages/AllMovies";
import MyCollection from "../pages/MyCollection";
import AddMovie from "../pages/AddMovie";
import UpdateMovie from "../pages/UpdateMovie";
import MovieDetails from "../pages/MovieDetails";
import MyWatchList from "../pages/MyWatchList";
import TopRatedMovie from "../components/TopRatedMovie";

export const router = createBrowserRouter([
  {
    path: "/",

    element: <MainLayout></MainLayout>,
    hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:3000/latest-movies"),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/movie-details/:id",
        element: <MovieDetails></MovieDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/movies/${params.id}`),
      },
      {
        path: "/add-movie",
        element: (
          <PrivateRoute>
            {" "}
            <AddMovie></AddMovie>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-movie/:id",
        element: (
          <PrivateRoute>
            {" "}
            <UpdateMovie></UpdateMovie>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/movies/${params.id}`),
      },

      {
        path: "/login-pages",
        element: <LoginPages></LoginPages>,
      },
      {
        path: "/topRatedMovie",
        element: <TopRatedMovie></TopRatedMovie>,
        loader: () => fetch("http://localhost:3000/topRated-movies"),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/all-movies",
        element: <AllMovies></AllMovies>,
        loader: () => fetch("http://localhost:3000/movies"),
      },
      {
        path: "/my-collection",
        element: (
          <PrivateRoute>
            <MyCollection></MyCollection>,
          </PrivateRoute>
        ),
      },
      {
        path: "/my-watchList",
        element: (
          <PrivateRoute>
            <MyWatchList></MyWatchList>,
          </PrivateRoute>
        ),
      },
      {
        path: "/register-page",
        element: <RegisterPage></RegisterPage>,
      },
      {
        path: "/forgot-password-page",
        element: <ForgotPasswordPage></ForgotPasswordPage>,
      },
    ],
  },

  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

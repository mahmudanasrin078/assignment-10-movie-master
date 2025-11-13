// import React, { useContext } from "react";
// import { Link, useLoaderData, useNavigate } from "react-router";
// import Swal from "sweetalert2";
// import { AuthContext } from "../context/AuthContext";
// import { toast } from "react-toastify/unstyled";

// const MovieDetails = () => {
//   const navigate = useNavigate();
//   const data = useLoaderData();
//   const movie = data.result;
//   console.log(movie);

//   const { user } = useContext(AuthContext);

//   // ------delete function-------

//   const handleDelete = () => {
//     console.log("delete");
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         fetch(`http://localhost:3000/movies/${movie._id}`, {
//           method: "DELETE",
//           headers: {
//             "Content-type": "application/json",
//           },
//         })
//           .then((res) => res.json())
//           .then((data) => {
//             console.log(data);
//             navigate("/all-movies");

//             Swal.fire({
//               title: "Deleted!",
//               text: "Your file has been deleted.",
//               icon: "success",
//             });
//           })
//           .catch((err) => {
//             console.log(err);
//           });
//       }
//     });
//   };

//   //------handle watch list

//   const handleWatchList = () => {
//     fetch(`http://localhost:3000/watch-list`, {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json",
//       },
//       // ----------
//       body: JSON.stringify({ ...movie, watched_by: user.email }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         toast.success("Successfully add watchList");
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   return (
//     <div className="hero bg-base-200 min-h-screen">
//       <div className="hero-content flex-col">
//         <div>
//           <img
//             src={movie.posterUrl}
//             className="max-w-sm rounded-lg shadow-2xl"
//           />
//         </div>
//         <div>
//           <h1 className="text-5xl font-bold">
//             {movie.title} ({movie.releaseYear})
//           </h1>
//           <div className="flex gap-10 my-4">
//             <div>
//               <h2>Ratting {movie.rating}</h2>
//             </div>
//             <div>
//               <h2>duration: {movie.duration} Min </h2>
//             </div>
//           </div>
//           <div className="space-y-4">
//             <p>plotSummary {movie.plotSummary} </p>
//             <p>Genre {movie.genre}</p>
//             <p>director {movie.director}</p>
//             <p>Cast {movie.cast}</p>
//             <p>language {movie.language}</p>
//             <p>country {movie.country}</p>
//             <p></p>
//           </div>
//           <div>
//             {user && (
//               <div className="flex  gap-10">
//                 <Link
//                   to={`/update-movie/${movie._id}`}
//                   disabled={user?.email !== movie.addedBy}
//                   className="btn btn-primary"
//                 >
//                   {" "}
//                   Edit Movie{" "}
//                 </Link>

//                 <button
//                   disabled={user?.email !== movie.addedBy}
//                   onClick={handleDelete}
//                   className="btn btn-primary"
//                 >
//                   Delete
//                 </button>
//                 <button onClick={handleWatchList} className="btn btn-primary">
//                   Watch List
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MovieDetails;

//-------------

import React, { useContext } from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify/unstyled";

const MovieDetails = () => {
  const navigate = useNavigate();
  const data = useLoaderData();
  const movie = data.result;
  console.log(data);
  const { user } = useContext(AuthContext);

  // ------delete function-------
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/movies/${movie._id}`, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then(() => {
            navigate("/all-movies");
            Swal.fire("Deleted!", "Movie has been deleted.", "success");
          })
          .catch((err) => console.error(err));
      }
    });
  };

  //------handle watch list
  const handleWatchList = () => {
    fetch(`http://localhost:3000/watch-list`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ ...movie, watched_by: user.email }),
    })
      .then((res) => res.json())
      .then(() => toast.success("Added to Watchlist!"))
      .catch((err) => console.error(err));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-10 px-5">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 bg-gray-900/60 p-8 rounded-xl shadow-xl border border-gray-700">
        {/* Movie Poster */}
        <div className="w-full md:w-1/3">
          <img
            src={movie.posterUrl}
            alt={movie.title}
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>

        {/* Movie Info */}
        <div className="w-full md:w-2/3 space-y-5">
          <h1 className="text-4xl md:text-5xl font-extrabold text-red-400">
            {movie.title}{" "}
            <span className="text-gray-400 text-3xl">
              ({movie.releaseYear})
            </span>
          </h1>

          <div className="flex flex-wrap gap-6 text-lg text-gray-300">
            <p>
              ⭐{" "}
              <span className="font-semibold text-yellow-400">
                {movie.rating}
              </span>
            </p>
            <p>⏱ {movie.duration} min</p>
            <p>🎬 {movie.genre}</p>
          </div>

          <p className="text-gray-200 text-lg leading-relaxed">
            <span className="font-semibold text-gray-400">Plot:</span>{" "}
            {movie.plotSummary}
          </p>

          <div className="grid md:grid-cols-2 gap-y-2 text-gray-300">
            <p>
              <span className="font-semibold text-gray-400">Director:</span>{" "}
              {movie.director}
            </p>
            <p>
              <span className="font-semibold text-gray-400">Cast:</span>{" "}
              {movie.cast}
            </p>
            <p>
              <span className="font-semibold text-gray-400">Language:</span>{" "}
              {movie.language}
            </p>
            <p>
              <span className="font-semibold text-gray-400">Country:</span>{" "}
              {movie.country}
            </p>
          </div>

          {/* Buttons */}
          {user && (
            <div className="flex flex-wrap gap-4 mt-6">
              <Link
                to={`/update-movie/${movie._id}`}
                className={`btn btn-red text-white font-semibold px-6 py-2 bg-linear-to-r from-pink-500 to-red-600 hover:from-red-600 hover:to-pink-500  rounded-lg shadow-md transition ${
                  user?.email !== movie.addedBy
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                disabled={user?.email !== movie.addedBy}
              >
                ✏️ Edit Movie
              </Link>

              <button
                onClick={handleDelete}
                disabled={user?.email !== movie.addedBy}
                className={`btn btn-error 
                  text-white font-semibold bg-linear-to-r from-pink-500 to-red-600 hover:from-red-600 hover:to-pink-500  px-6 py-2 rounded-lg shadow-md transition ${
                  user?.email !== movie.addedBy
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                🗑️ Delete
              </button>

              <button
                onClick={handleWatchList}
                className="btn bg-linear-to-r from-pink-500 to-red-600 hover:from-red-600 hover:to-pink-500  font-semibold px-6 py-2 rounded-lg shadow-md transition"
              >
                🎞️ Add to Watchlist
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;

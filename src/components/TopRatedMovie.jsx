import React, { useEffect, useState } from "react";

import { MovieCard } from "./MovieCard";
import LoadingSpinner from "./LoadingSpiner";

const TopRatedMovie = () => {
  const [topRatedMovie, setTopRatedMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://assignment-10-movie-server.vercel.app/topRated-movies`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTopRatedMovie(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  //console.log(data);
  return (
    <div className="bg-gray-700">
      <div className="text-2xl text-white font-bold p-5">
        Top Rated <span className="text-red-500">Movies </span>
      </div>

      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        {topRatedMovie.map((movie) => (
          <MovieCard key={movie._id} movie={movie}></MovieCard>
        ))}
      </div>
    </div>
  );
};

export default TopRatedMovie;

import React from "react";
import { useLoaderData } from "react-router";
import { MovieCard } from "./MovieCard";

const TopRatedMovie = () => {
  const data = useLoaderData();

  console.log(data);
  return (
    <div>
      <div>
        <div className="text-2xl font-bold p-5">
          Top Rated <span className="text-red-500">Movies </span>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map((movie) => (
            <MovieCard key={movie._id} movie={movie}></MovieCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopRatedMovie;

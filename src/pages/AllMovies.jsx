import React from "react";
import { useLoaderData } from "react-router";
import { MovieCard } from "../components/MovieCard";

const AllMovies = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div>
      <div className="text-2xl font-bold p-5">All <span className="text-red-500">Movies</span> ({data.length
    })</div>
      
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((movie) => (
          <MovieCard key={movie._id} movie={movie}></MovieCard>
        ))}
      </div>
    </div>
  );
};

export default AllMovies;

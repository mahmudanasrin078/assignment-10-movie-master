import React, { useState } from "react";

const FilterMovies = () => {
  const [movies, setMovies] = useState([]);
  const [genres] = useState([
    "Action",
    "Drama",
    "Thriller",
    "Animation",
    "Sci-Fi",
  ]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [minRating, setMinRating] = useState("");
  const [maxRating, setMaxRating] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenreChange = (e) => {
    const value = e.target.value;
    setSelectedGenres((prev) =>
      prev.includes(value) ? prev.filter((g) => g !== value) : [...prev, value]
    );
  };

  const handleFilter = async () => {
    setLoading(true);
    setError("");
    try {
      const params = new URLSearchParams();
      if (selectedGenres.length > 0)
        params.append("genres", selectedGenres.join(","));
      if (minRating) params.append("minRating", minRating);
      if (maxRating) params.append("maxRating", maxRating);

      console.log(
        " Fetching:",
        `http://localhost:3000/filter-movies?${params}`
      );

      const res = await fetch(`http://localhost:3000/filter-movies?${params}`);
      const data = await res.json();

      console.log("✅ Response:", data);

      if (!Array.isArray(data)) {
        throw new Error("Invalid data format");
      }

      setMovies(data);
    } catch (err) {
      console.error("❌ Error fetching movies:", err);
      setError("Failed to fetch movies");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 bg-gray-800 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-white">
        Filter <span className="text-red-500"> Movies</span>
      </h2>

      <div className="flex flex-wrap gap-4 justify-center items-center text-white mb-6">
        <div>
          <label className="font-semibold mr-2">Genres:</label>
          {genres.map((genre) => (
            <label key={genre} className="mr-3">
              <input
                type="checkbox"
                value={genre}
                checked={selectedGenres.includes(genre)}
                onChange={handleGenreChange}
              />
              <span className="ml-1">{genre}</span>
            </label>
          ))}
        </div>

        <div>
          <label className="font-semibold mr-2">Min Rating:</label>
          <input
            type="number"
            min="0"
            max="10"
            step="0.1"
            value={minRating}
            onChange={(e) => setMinRating(e.target.value)}
            className="border p-1 rounded"
          />
        </div>

        <div>
          <label className="font-semibold mr-2">Max Rating:</label>
          <input
            type="number"
            min="0"
            max="10"
            step="0.1"
            value={maxRating}
            onChange={(e) => setMaxRating(e.target.value)}
            className="border p-1 rounded"
          />
        </div>

        <button
          onClick={handleFilter}
          className="btn rounded-full bg-linear-to-r from-pink-500 to-red-600 hover:from-red-600 hover:to-pink-500 text-white mt-5 w-[500px] "
        >
          Apply Filter
        </button>
      </div>

      {loading && <p className="text-center text-gray-600">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && !error && (
        <>
          {movies.length === 0 ? (
            <p className="text-center text-gray-500">No movies found.</p>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {movies.map((movie) => (
                <div
                  key={movie._id}
                  className="bg-white shadow-lg rounded-lg overflow-hidden"
                >
                  <img
                    src={movie.posterUrl}
                    alt={movie.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold">{movie.title}</h3>
                    <p className="text-sm text-gray-600">{movie.genre}</p>
                    <p className="text-sm text-yellow-600">
                      ⭐ Rating: {movie.rating}
                    </p>
                    <p className="text-sm text-gray-500">{movie.releaseYear}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default FilterMovies;

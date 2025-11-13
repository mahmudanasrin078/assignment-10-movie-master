import { FaStar } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { Link } from "react-router";

export const MovieCard = ({ movie }) => {
  const { posterUrl, title, rating, genre, _id, releaseYear, addedBy } = movie;
  return (
    <div className="card bg-gray-700 shadow-xl text-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <figure className="h-48 overflow-hidden">
        <img
          src={posterUrl}
          alt={title}
          className="w-full h-full object-fill hover:scale-110 transition-transform duration-300"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="badge text-xs badge-xs bg-linear-to-r from-pink-500 to-red-600 hover:from-red-600 hover:to-pink-500 badge-secondary font-semibold rounded-full">
          {genre}
        </div>
        <div className="flex gap-2  items-center font-semibold text-white">
          {" "}
          <span className="text-sm text-yellow-400">
            <FaStar />
          </span>
          {rating}{" "}
        </div>
        <p className="flex gap-2  items-center  line-clamp-1">
          <span>
            <FaCalendarDays />
          </span>{" "}
          {releaseYear}{" "}
        </p>

        <p className="text-sm text-gray-300">{addedBy}</p>
        <div className="card-actions justify-between items-center mt-4">
          <Link
            to={`/movie-details/${_id}`}
            className="btn rounded-full bg-linear-to-r from-pink-500 to-red-600 hover:from-red-600 hover:to-pink-500 text-white w-full btn-sm"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

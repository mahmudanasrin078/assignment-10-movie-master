import { Link } from "react-router";

export const MovieCard = ({ movie }) => {
  const { posterUrl, title, rating, genre, _id, releaseYear, addedBy } = movie;
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
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
        <div className="text-xs font-semibold text-secondary">{rating}</div>
        <p className="line-clamp-1">{releaseYear}</p>

        <p className="text-sm text-base-content/70">{addedBy}</p>
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

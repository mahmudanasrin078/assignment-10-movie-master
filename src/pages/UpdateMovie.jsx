import React from "react";
import { useLoaderData } from "react-router";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const UpdateMovie = () => {
  const data = useLoaderData();
  //console.log(data);
  const movie = data.result;
  //console.log(movie);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title: e.target.title.value,

      releaseYear: e.target.releaseYear.value,

      genre: e.target.genre.value,

      language: e.target.language.value,

      director: e.target.director.value,

      cast: e.target.cast.value,

      rating: parseFloat(e.target.rating.value),

      duration: e.target.duration.value,

      plotSummary: e.target.plotSummary.value,

      posterUrl: e.target.posterUrl.value,

      country: e.target.country.value,
    };

    // console.log(formData);
    //---- url ke call-----
    fetch(`https://assignment-10-movie-server.vercel.app/movies/${movie._id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Successfully Updated");
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="min-h-screen bg-neutral  flex justify-center items-start py-12">
      <form
        onSubmit={handleSubmit}
        className="card bg-base-300 w-full max-w-md shadow-xl p-6"
      >
        <h2 className="text-2xl font-bold text-center mb-6">
          Update <span className="text-red-500"> Movie</span>
        </h2>

        <div className="form-control text-[#767272]">
          <label className="label">Movie Title</label>
          <input
            type="text"
            name="title"
            defaultValue={movie.title}
            placeholder="Enter movie name"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="form-control text-[#767272] mt-3">
          <label className="label">Release Year</label>
          <input
            type="number"
            defaultValue={movie.releaseYear}
            name="releaseYear"
            placeholder="2025"
            className="input input-bordered w-full"
          />
        </div>

        {/* Genre Dropdown */}
        <div className="form-control text-[#767272] mt-3">
          <label className="label">Genre</label>
          <select
            name="genre"
            defaultValue={movie.genre}
            required
            className="select select-bordered w-full"
          >
            <option disabled selected>
              Select genre
            </option>
            <option>Action</option>
            <option>Drama</option>
            <option>Comedy</option>
            <option>Thriller</option>
            <option>Animation</option>
          </select>
        </div>

        <div className="form-control mt-3 text-[#767272]">
          <label className="label">Director</label>
          <input
            type="text"
            name="director"
            defaultValue={movie.director}
            placeholder="Director name"
            className="input input-bordered w-full "
          />
        </div>

        <div className="form-control text-[#767272]  mt-3">
          <label className="label"> Rating</label>
          <input
            type="number"
            defaultValue={movie.rating}
            name="rating"
            step="0.1"
            placeholder="8.5"
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control text-[#767272]  mt-3">
          <label className="label"> Duration</label>
          <input
            type="number"
            name="duration"
            defaultValue={movie.duration}
            step="0.1"
            placeholder="000"
            className="input input-bordered w-full "
          />
        </div>

        <div className="form-control w-full text-[#767272]  mt-3">
          <label className="label">Poster URL</label>
          <input
            type="url"
            name="posterUrl"
            defaultValue={movie.posterUrl}
            placeholder="https://i.ibb.co/lionking.jpg"
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control text-[#767272] w-full mt-3">
          <label className="label">Cast</label>
          <textarea
            name="cast"
            defaultValue={movie.cast}
            className="input input-bordered w-full"
            placeholder="........."
          ></textarea>
        </div>

        <div className="form-control text-[#767272]  mt-3">
          <label className="label">Country</label>
          <textarea
            name="country"
            defaultValue={movie.country}
            className="input input-bordered w-full"
            placeholder="Country Name"
          ></textarea>
        </div>

        <div className="form-control text-[#767272] mt-3">
          <label className="label">Plot Summary</label>
          <textarea
            name="plotSummary"
            defaultValue={movie.plotSummary}
            className="textarea textarea-bordered"
            placeholder="Short movie description..."
          ></textarea>
        </div>

        <div className="form-control text-[#767272] mt-3">
          <label className="label">Language</label>
          <select
            name="language"
            defaultValue={movie.language}
            className="select select-bordered"
          >
            <option>English</option>
            <option>Bangla</option>
            <option>Hindi</option>
            <option>Others</option>
          </select>
        </div>

        <button
          onClick={handleDelete}
          type="submit"
          className="btn  rounded-full bg-linear-to-r from-pink-500 to-red-600 hover:from-red-600 hover:to-pink-500 text-white w-full btn-sm mt-6"
        >
          Update Movie
        </button>
      </form>
    </div>
  );
};

export default UpdateMovie;

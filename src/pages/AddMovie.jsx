import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const AddMovie = () => {
  const { user } = use(AuthContext);
  //console.log(user)
  const handleChange = () => {};

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

      addedBy: user.email,
    };

    console.log(formData);
    //---- url ke call-----
    fetch("http://localhost:3000/movies", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Successfully added!");
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="min-h-screen bg-neutral flex justify-center items-start py-12">
      <form
        onSubmit={handleSubmit}
        className="card bg-base-300 w-full max-w-md shadow-xl p-6"
      >
        <h2 className="text-2xl font-bold text-center mb-6">
          Add <span className="text-red-500"> Movie</span>
        </h2>

        <div className="form-control text-[#767272]">
          <label className="label">Movie Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter movie name"
            className="input input-bordered w-full"
            required
            onChange={handleChange}
          />
        </div>

        <div className="form-control text-[#767272] mt-3">
          <label className="label">Release Year</label>
          <input
            type="number"
            name="releaseYear"
            placeholder="2025"
            className="input input-bordered w-full"
            //onChange={handleChange}
          />
        </div>

        {/* Genre Dropdown */}
        <div className="form-control text-[#767272] mt-3">
          <label className="label">Genre</label>
          <select
            name="genre"
            required
            className="select select-bordered w-full"
            // onChange={handleChange}
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
            placeholder="Director name"
            className="input input-bordered w-full "
            onChange={handleChange}
          />
        </div>

        <div className="form-control text-[#767272]  mt-3">
          <label className="label"> Rating</label>
          <input
            type="number"
            name="rating"
            step="0.1"
            placeholder="8.5"
            className="input input-bordered w-full "
            onChange={handleChange}
          />
        </div>
        <div className="form-control text-[#767272]  mt-3">
          <label className="label"> Duration</label>
          <input
            type="number"
            name="duration"
            step="0.1"
            placeholder="000"
            className="input input-bordered w-full "
            onChange={handleChange}
          />
        </div>

        <div className="form-control w-full text-[#767272]  mt-3">
          <label className="label">Poster URL</label>
          <input
            type="url"
            name="posterUrl"
            placeholder="https://posterURL.com/..."
            className="input input-bordered w-full"
            onChange={handleChange}
          />
        </div>

        <div className="form-control text-[#767272] w-full mt-3">
          <label className="label">Cast</label>
          <textarea
            name="cast"
            className="input input-bordered w-full"
            placeholder="........."
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="form-control text-[#767272]  mt-3">
          <label className="label">Country</label>
          <textarea
            name="country"
            className="input input-bordered w-full"
            placeholder="Country Name"
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="form-control text-[#767272] mt-3">
          <label className="label">Plot Summary</label>
          <textarea
            name="plotSummary"
            className="textarea textarea-bordered"
            placeholder="Short movie description..."
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="form-control text-[#767272] mt-3">
          <label className="label">Language</label>
          <select
            name="language"
            className="select select-bordered"
            onChange={handleChange}
          >
            <option>English</option>
            <option>Bangla</option>
            <option>Hindi</option>
            <option>Others</option>
          </select>
        </div>

        <button
          type="submit"
          className="btn mt-4 rounded-full bg-linear-to-r from-pink-500 to-red-600 hover:from-red-600 hover:to-pink-500 text-white w-full btn-sm"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddMovie;

import React, { useContext, useState } from "react";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    setLoading(true);

    updateProfile(user, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        toast.success("Profile updated successfully!");
        setUser({ ...user, displayName: name, photoURL: photoURL });
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-base-200 p-5">
      <title>Profile</title>
      <div className="card bg-base-100 shadow-xl w-full max-w-md p-6">
        <h1 className="text-2xl font-bold text-center mb-5">Your Profile</h1>

        {/* User */}
        <div className="flex flex-col items-center mb-5">
          <img
            src={
              user?.photoURL ||
              "https://img.icons8.com/?size=96&id=8vsjJt13MQHk&format=png"
            }
            alt="User"
            className="w-24 h-24 rounded-full mb-3"
          />
          <h2 className="text-xl font-semibold">{user?.displayName}</h2>
          <p className="text-gray-500">{user?.email}</p>
        </div>

        {/* Update  */}
        <form onSubmit={handleUpdateProfile} className="space-y-4">
          <div>
            <label className="label">Name</label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter new name"
              required
            />
          </div>

          <div>
            <label className="label">Photo URL</label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              placeholder="Enter new photo URL"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary w-full mt-4"
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;

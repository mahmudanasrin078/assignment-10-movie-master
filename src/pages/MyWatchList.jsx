import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import LoadingSpinner from "../components/LoadingSpiner";
import { MovieCard } from "../components/MovieCard";

const MyWatchList = () => {
  const { user } = useContext(AuthContext);
  const [myCollection, setMyCollection] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/my-watchList?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        setMyCollection(data);
        setLoading(false);
      });
  }, [user]);

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        {myCollection.map((movie) => (
          <MovieCard key={movie._id} movie={movie}></MovieCard>
        ))}
      </div>
    </div>
  );
};

export default MyWatchList;

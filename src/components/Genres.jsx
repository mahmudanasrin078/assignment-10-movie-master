// import React from "react";
// import CountUp from "react-countup";

// const Genres = () => {
//   return (
//     <div>
//       <CountUp>
//         end={10}
//         duration={5}
//       </CountUp>
//     </div>
//   );
// };

// export default Genres;

import React from "react";
import CountUp from "react-countup";

const Genres = () => {
  const genres = [
    { name: "Action", count: 120 },
    { name: "Drama", count: 80 },
    { name: "Comedy", count: 95 },
    { name: "Thriller", count: 60 },
  ];

  return (
    <div className="bg-gray-900 py-12">
      <h2 className="text-3xl font-bold text-center text-white mb-8">
        Popular Genres
      </h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
        {genres.map((genre, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:scale-105 transform transition duration-300"
          >
            <h3 className="text-xl font-semibold text-white mb-3">
              {genre.name}
            </h3>
            <h2 className="text-3xl font-bold text-yellow-400 mb-2">
              <CountUp end={genre.count} duration={3} />
            </h2>
            <p className="text-gray-400 text-sm">Movies Available</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Genres;

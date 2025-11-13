import { useLoaderData } from "react-router";
import Slider from "../components/Slider";
import { MovieCard } from "../components/MovieCard";
import Genres from "../components/Genres";
import TopRatedMovie from "../components/TopRatedMovie";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import FilterMovies from "../components/FilterMovies";

// ---------------

const Home = () => {
  const data = useLoaderData();

  console.log(data);
  // -----------------

  // --------------

  useEffect(() => {
    Aos.init({
      duration: 800,
      offset: 120,
      easing: "ease-in-out",
      delay: 0,
      once: true,
    });
  }, []);

  return (
    <div>
      <title>Home</title>
      <section>
        <Slider></Slider>
      </section>

      {/* genre section */}
      <section data-aos="fade-up">
        <Genres></Genres>
      </section>

      {/* filter */}

      <section data-aos="fade-up">
        <FilterMovies></FilterMovies>
      </section>

      {/* about */}
      <section>
        <div
          data-aos="fade-down"
          className="bg-gray-700 px-4 py-12 md:px-8 lg:px-16"
        >
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-8">
            {/* Left  */}
            <div className="flex-1">
              <img
                src="https://i.ibb.co.com/7JxFwhCv/download-5.jpg"
                alt="MovieMaster Platform"
                className="w-full rounded-lg shadow-2xl object-cover"
              />
            </div>

            {/* Right  */}
            <div className="flex-1">
              <h1 className="text-3xl sm:text-3xl font-bold  mb-4 text-center text-white lg:text-left">
                About <span className="text-red-500">MovieMaster</span>
              </h1>
              <p className="py-2 text-gray-300 text-base sm:text-lg text-center lg:text-left">
                <strong>MovieMaster Pro</strong> is a modern movie and web
                series management platform where users can explore the latest
                releases, trending titles, and detailed reviews with ease. This
                app is built using React React Router ,Tailwind CSS , and
                DaisyUI — making it fast, elegant, and mobile-friendly.
              </p>
              <p className="py-2 text-gray-400 text-base sm:text-lg text-center lg:text-left">
                Our goal is to provide movie lovers with a smart and engaging
                experience — helping them easily discover movies, check ratings,
                watch trailers, and get all the details in one place.
              </p>

              <div className="mt-4 flex justify-center lg:justify-start">
                <button className="btn rounded-full bg-linear-to-r from-pink-500 to-red-600 hover:from-red-600 hover:to-pink-500 text-white w-full btn-sm">
                  Explore Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- */}

      <section data-aos="fade-up" className="px-5 py-10 bg-gray-900">
        <div className="text-2xl font-bold p-5">
          Recently <span className="text-red-500">Added </span>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map((movie) => (
            <MovieCard key={movie._id} movie={movie}></MovieCard>
          ))}
        </div>
      </section>
      {/* top Movie*/}

      <section data-aos="fade-up">
        <TopRatedMovie></TopRatedMovie>
      </section>

      {/* ekhane dekhate hobe */}

      {/* about section */}

      {/*Latest 6 movie */}

      {/*carousel  card*/}
      <div>
        <div className="text-2xl font-bold p-5">
          {" "}
          <span className="text-red-500">Movies</span>
        </div>
        <div className="carousel rounded-box">
          <div className="carousel-item">
            <img
              src="https://i.ibb.co.com/tpRbyH4w/images-2.jpg"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://i.ibb.co.com/nqw4dJks/images-1.jpg"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://i.ibb.co.com/C5NjSn0G/images-6.jpg"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://i.ibb.co.com/YFmHxnF2/images-8.jpg"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src=" https://i.ibb.co.com/bgRZ8TQD/images-9.jpg"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://i.ibb.co.com/TxPZFc4X/images-10.jpg"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://i.ibb.co.com/zhmvvjRc/images-11.jpg"
              alt="Burger"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

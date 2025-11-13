import { useLoaderData } from "react-router";
import Slider from "../components/Slider";
import { MovieCard } from "../components/MovieCard";
import Genres from "../components/Genres";
import TopRatedMovie from "../components/TopRatedMovie";




// ---------------

const Home = () => {
  //   useEffect(() => {
  //     AOS.init({
  //       // Global settings:
  //       disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  //       startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  //       initClassName: "aos-init", // class applied after initialization
  //       animatedClassName: "aos-animate", // class applied on animation
  //       useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  //       disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  //       debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  //       throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  //       // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  //       offset: 120, // offset (in px) from the original trigger point
  //       delay: 0, // values from 0 to 3000, with step 50ms
  //       duration: 400, // values from 0 to 3000, with step 50ms
  //       easing: "ease", // default easing for AOS animations
  //       once: false, // whether animation should happen only once - while scrolling down
  //       mirror: false, // whether elements should animate out while scrolling past them
  //       anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  //     });
// }, []);
  
  const data = useLoaderData();

  console.log(data);
  return (
    <div>
      <title>Home</title>
      <section>
        <Slider></Slider>
      </section>

      {/* genre section */}
<section>
  <Genres></Genres>
</section>

{/* top Movie*/}

<section>
  <TopRatedMovie></TopRatedMovie>
</section>

      {/* about section */}

      <section>
        <div className="bg-base-200 px-4 py-12 md:px-8 lg:px-16">
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
              <h1 className="text-2xl sm:text-2xl font-bold  mb-4 text-center lg:text-left">
                About <span className="text-pink-500">MovieMaster</span>
              </h1>
              <p className="py-2 text-gray-500 text-base sm:text-lg text-center lg:text-left">
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

      {/*Latest 6 movie */}

      <div>
        <div className="text-2xl font-bold p-5">
          Recently <span className="text-red-500">Added </span>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map((movie) => (
            <MovieCard key={movie._id} movie={movie}></MovieCard>
          ))}
        </div>
      </div>


{/* top 5 movies */}



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

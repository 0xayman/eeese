import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

export default function Home() {
  return (
    <>
      {/* Header */}
      <div
        className="h-100 bg-gray-800 flex flex-col items-center justify-center"
        id="header"
      >
        <h1 className="text-5xl font-bold text-white">EEESE 2022</h1>
        <h3 className="text-3xl font-bold text-white mt-3">
          New Stage of Evolution
        </h3>
        <div></div>
      </div>

      <div className="mt-20 flex justify-center">
        <p className="text-center text-xl w-3/4">
          <span className="font-bold text-pink-700">EEESE</span> is an
          exhibition for the Students of the Electrical & Electronics
          Engineering Department, where projects and inventions of the students
          and their scientific papers are presented. The acronym (EEESE) stands
          for <span className="text-pink-700">E</span>lectrical and{" "}
          <span className="text-pink-700">E</span>lectronics{" "}
          <span className="text-pink-700">E</span>ngineering{" "}
          <span className="text-pink-700">S</span>tudents
          <span className="text-pink-700">E</span>xhibition.
        </p>
      </div>

      <div className="mt-20 px-16 grid grid-cols-1 md:grid-cols-4 space-x-8 space-y-8">
        <div>
          <div
            style={{
              backgroundImage: "url('/assets/IMG_0178.JPG')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className=" h-52 overflow-hidden bg-gray-500 rounded-md transform -rotate-1 md:-rotate-6 hover:scale-110 hover:shadow-sm transition-all duration-150"
          ></div>
        </div>
        <div>
          <div
            style={{
              backgroundImage: "url('/assets/PCRX3095.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className=" h-52 bg-gray-500 rounded-md overflow-hidden transform rotate-3 md:rotate-6 hover:scale-110 hover:shadow-sm transition-all duration-150"
          ></div>
        </div>
        <div>
          <div
            style={{
              backgroundImage: "url('/assets/IMG_9965.JPG')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className=" h-52 overflow-hidden bg-gray-500 rounded-md transform -rotate-1 md:-rotate-6 hover:scale-110 hover:shadow-sm transition-all duration-150"
          ></div>
        </div>
        <div>
          <div
            style={{
              backgroundImage: "url('/assets/GZPR7613.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className=" h-52 bg-gray-500 overflow-hidden rounded-md transform rotate-3 md:rotate-6 hover:scale-110 hover:shadow-sm transition-all duration-150"
          ></div>
        </div>
      </div>

      <div>
        <div className="relative flex items-center justify-center h-100 my-20 overflow-hidden">
          <div className="relative z-30 px-32 h-full w-full bg-black flex flex-col justify-center bg-opacity-50">
            <h2 className="font-bold text-xl text-white">
              What is New in EEESE 2022?
            </h2>
            <p className="text-white text-base md:text-xl mt-6">
              EEESE 2022 aims to be part of Sudan's development and to reach
              that goal, we came up with the idea of our 10 tracks that involve
              many different fields; Those tracks are: agri-tech, art and
              culture, clean energy and power, education, environment, med-tech,
              product and manufacturing, security, social, transportation.EEESE
              aims to be part of Sudan development by presenting projects that
              revolve around these tracks and help solve real world problems.
            </p>
          </div>
          <video autoPlay loop muted className="absolute z-10">
            <source src="assets/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="px-32">
        <h2 className="text-3xl font-bold text-primary mb-8">Our Tracks</h2>
        <div className="grid grid-cols-7">
          <div className="flex flex-col items-center">
            <div className="h-28 w-28 rounded-full bg-gray-400">
            </div>
            <h3 className="font-bold text-gray-800 mt-2">Title</h3>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-28 w-28 rounded-full bg-gray-400"></div>
            <h3 className="font-bold text-gray-800 mt-2">Title</h3>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-28 w-28 rounded-full bg-gray-400"></div>
            <h3 className="font-bold text-gray-800 mt-2">Title</h3>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-28 w-28 rounded-full bg-gray-400"></div>
            <h3 className="font-bold text-gray-800 mt-2">Title</h3>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-28 w-28 rounded-full bg-gray-400"></div>
            <h3 className="font-bold text-gray-800 mt-2">Title</h3>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-28 w-28 rounded-full bg-gray-400"></div>
            <h3 className="font-bold text-gray-800 mt-2">Title</h3>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-28 w-28 rounded-full bg-gray-400"></div>
            <h3 className="font-bold text-gray-800 mt-2">Title</h3>
          </div>
        </div>
        <div className="grid grid-cols-7 mt-7">
          <div className="flex flex-col items-center col-start-3">
            <div className="h-28 w-28 rounded-full bg-gray-400"></div>
            <h3 className="font-bold text-gray-800 mt-2">Title</h3>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-28 w-28 rounded-full bg-gray-400"></div>
            <h3 className="font-bold text-gray-800 mt-2">Title</h3>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-28 w-28 rounded-full bg-gray-400"></div>
            <h3 className="font-bold text-gray-800 mt-2">Title</h3>
          </div>
        </div>
      </div>

      <div className="relative px-32 mt-10 hidden md:block">
        <h2 className="text-3xl font-bold text-primary mb-8">
          EEESE through the years
        </h2>
        <div className="flex justify-center">
          <div className="flex flex-col items-center">
            <div
              style={{
                backgroundImage: "url('/assets/eeese_2016.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="rounded-full h-48 w-48"
            ></div>
            <h4 className="text-xl font-bold text-primary mt-4">EEESE 2016</h4>
          </div>
          <div className="flex flex-col items-center">
            <div
              style={{
                backgroundImage: "url('/assets/eeese_2017.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="rounded-full h-48 w-48"
            ></div>
            <h4 className="text-xl font-bold text-primary mt-4">EEESE 2017</h4>
          </div>
          <div className="flex flex-col items-center">
            <div
              style={{
                backgroundImage: "url('/assets/eeese_logo.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="rounded-full h-48 w-48"
            ></div>
            <h4 className="text-xl font-bold text-primary mt-4">EEESE 2022</h4>
          </div>
        </div>
      </div>

      <div className="px-32 mt-10 block md:hidden">
        <h2 className="text-3xl font-bold text-primary">History of EEESE</h2>
        <div className="flex flex-col space-y-8 items-center mt-16">
          <div className="h-48 w-48 rounded-full bg-gray-400"></div>
          <div className="h-48 w-48 rounded-full bg-gray-400"></div>
          <div className="h-48 w-48 rounded-full bg-gray-400"></div>
          <div className="h-48 w-48 rounded-full bg-gray-400"></div>
          <div className="h-48 w-48 rounded-full bg-gray-400"></div>
        </div>
      </div>

      <div className="mt-16 py-4 bg-gray-800">
        <div className="text-center mb-4 text-white">
          EEESE 2022 - New Stage of Evolution
        </div>
        <div className="px-16 flex justify-center space-x-8">
          <a target="_blank" rel="noreferrer" href="https://www.facebook.com/eeese/">
            <BsFacebook size={20} color="#1877f2" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://twitter.com/eeese_official">
            <BsTwitter size={20} color="#00acee" />
          </a>
          <BsInstagram size={20} color="#EC008C" />
        </div>
      </div>
    </>
  );
}

import {BsFacebook, BsTwitter, BsInstagram} from 'react-icons/bs'

export default function Home() {
  return (
    <>
      {/* Header */}
      <div className="h-100 bg-gray-800 flex flex-col items-center justify-center" id="header">
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

      <div className="mt-20 px-16 grid grid-cols-4 space-x-8 space-y-8">
        <div>
          <div className=" h-52 bg-gray-500 rounded-md transform -rotate-6 hover:scale-110 hover:shadow-sm transition-all duration-150"></div>
        </div>
        <div>
          <div className=" h-52 bg-gray-500 rounded-md transform rotate-6 hover:scale-110 hover:shadow-sm transition-all duration-150"></div>
        </div>
        <div>
          <div className=" h-52 bg-gray-500 rounded-md transform -rotate-6 hover:scale-110 hover:shadow-sm transition-all duration-150"></div>
        </div>
        <div>
          <div className=" h-52 bg-gray-500 rounded-md transform rotate-6 hover:scale-110 hover:shadow-sm transition-all duration-150"></div>
        </div>
      </div>


      <div>
        
      <div
        className="relative flex items-center justify-center h-100 my-20 overflow-hidden"
      >
      <div className="relative z-30 px-32 h-full w-full bg-black flex flex-col justify-center bg-opacity-50">
        <h2 className="font-bold text-2xl text-white">
          What is New in EEESE 2022?
        </h2>
        <p className="text-white text-xl mt-6">
          EEESE 2022 aims to be part of Sudan development and to reach that goal
          we came with the idea of our 10 tracks that involve in many different
          fields, and those tracks are : agri-tech, art and culture, clean
          energy and power, education, environment, med-tech, product and
          manufacturing, security, social, transportation. By presenting
          projects that goes around these tracks and help solve real world
          problems EEESE aim to be part of Sudan development.
        </p>
      </div>
        <video autoPlay loop muted className="absolute z-10">
          <source src="assets/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      </div>

      <div className="px-32">
        <h2 className="text-3xl font-bold text-primary">History of EEESE</h2>
        <div className="flex flex-col space-y-8 items-center mt-16">
          <div className="">
            <div className="h-48 w-48 rounded-full bg-gray-400"></div>
          </div>
          <div className="flex space-x-8">
            <div className="h-48 w-48 rounded-full bg-gray-400"></div>
            <div className="h-48 w-48 rounded-full bg-gray-400"></div>
            <div className="h-48 w-48 rounded-full bg-gray-400"></div>
          </div>
          <div className="">
            <div className="h-48 w-48 rounded-full bg-gray-400"></div>
          </div>
        </div>
      </div>

      <div className="mt-16 py-4 bg-gray-800">
        <div className='text-center mb-4 text-white'>
          EEESE 2022 - New Stage of Evolution
        </div>
        <div className="px-16 flex justify-center space-x-8">
          <BsFacebook size={20} color='#1877f2' />
          <BsTwitter size={20} color='#00acee' />
          <BsInstagram size={20} color='#EC008C' />
        </div>
      </div>
    </>
  );
}

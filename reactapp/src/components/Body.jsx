import { BODY_CONTENT } from "../constants";
import profilePic from "../assets/kevinPic.jpeg";
const Body = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2 lg:pr-8"> {/* Changed padding to right */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">
              Kevin Tran
            </h1>
            <span className="bg-gradient-to-r from-red-600 via-red-400 to-yellow-400 bg-clip-text text-4xl tracking-tight text-transparent"> Student Software Engineer</span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {BODY_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:pl-8"> {/* Changed padding to left */}
          <div className="flex justify-center lg:justify-end">
            <img src={profilePic} alt="Kevin Tran" className="w-90 h-auto" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body
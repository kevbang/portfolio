import { BODY_CONTENT } from "../constants";
import profilePic from "../assets/kevinPic.jpeg";
import johnDeereLogo from "../assets/johnDeereLogo.png";
import { motion } from "framer-motion";

const Body = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2 lg:pr-4"> {/* Changed padding to right */}
          <div className="text-center lg:text-left">
            <motion.h1 
            initial={{x: -100, opacity: 0}} 
            animate={{x:0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="pb-12 font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Kevin Tran
            </motion.h1>
            <motion.span whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.1 }} drag="x" dragConstraints={{ left: -100, right: 100 }} className="bg-gradient-to-r from-red-600 via-red-400 to-yellow-400 bg-clip-text text-4xl tracking-tight text-transparent"> Student Software Engineer</motion.span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {BODY_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:pl-8"> {/* Changed padding to left */}
          <div className="flex flex-col justify-center lg:justify-end space-y-4"> {/* Changed to flex-col and space-y-4 for vertical spacing */}
            <img src={profilePic} alt="Kevin Tran" className="w-80 h-130" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body
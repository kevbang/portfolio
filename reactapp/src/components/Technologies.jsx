import {RiGithubFill} from 'react-icons/ri';
import { RiDatabase2Fill } from "react-icons/ri";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiTerraform } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration, 
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2 
        whileInView={{opacity: 1, y:0}}
        initial={{ opacity:0, y: -100 }}
        transition={{duration: 1.5}}
        className="my-20 text-center text-4xl">
            Shenanigans
        </motion.h2>
        <motion.div 
        whileInView={{opacity: 1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 py-4">
                <RiGithubFill className="text-7xl text-white-400"/>
            </motion.div>
            <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 py-4">
                <BiLogoSpringBoot className="text-7xl text-green-400"/>
            </motion.div>
            <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 py-4">
                <FaJava className="text-7xl text-blue-400"/>
            </motion.div>
            <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 py-4">
                <FaPython className="text-7xl text-yellow-400"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 py-4">
                <RiDatabase2Fill className="text-7xl text-red-600"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"className="rounded-2xl border-4 border-neutral-800 py-4">
                <SiTerraform className="text-7xl text-purple-500"/>
            </motion.div>
            
        </motion.div>
        </div>
  )
}

export default Technologies
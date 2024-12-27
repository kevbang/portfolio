import {RiGithubFill} from 'react-icons/ri';
import { RiDatabase2Fill } from "react-icons/ri";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiTerraform } from "react-icons/si";


const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h2 className="my-20 text-center text-4xl">
            Shenanigans
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 py-4">
                <RiGithubFill className="text-7xl text-white-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 py-4">
                <BiLogoSpringBoot className="text-7xl text-green-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 py-4">
                <FaJava className="text-7xl text-blue-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 py-4">
                <FaPython className="text-7xl text-yellow-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 py-4">
                <RiDatabase2Fill className="text-7xl text-red-600"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 py-4">
                <SiTerraform className="text-7xl text-purple-500"/>
            </div>
            
        </div>
        </div>
  )
}

export default Technologies
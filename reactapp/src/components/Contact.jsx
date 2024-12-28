import { CONTACT } from "../constants/index";
import { FaRegCopyright } from "react-icons/fa";
import { motion } from "framer-motion";
import { TbBrandOpenai } from "react-icons/tb";


const Contact = () => {
return (
    <div className="border-b border-neutral-900 pb-20 flex justify-center items-center">
        <div className="text-center">
            <motion.h2 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className="my-10 text-4xl">Contact Me!</motion.h2>
            <div className="tracking-tighter">
                <motion.p 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="my-4">{CONTACT.address}</motion.p>
                <motion.p
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }} 
                className="my-4">{CONTACT.email}</motion.p>
                <a href="https://www.linkedin.com/in/kevintran77" className="border-b">
                    {CONTACT.linked_in} 
                </a>
                
                
            </div>
            <p className="my-4 flex justify-center"><FaRegCopyright/></p>
            <p>  #AI-ASSISTED</p>
        </div>
    </div>
)
}

export default Contact
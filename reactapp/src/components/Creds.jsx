import { CERTIFICATES } from "../constants";
import { motion } from "framer-motion";

const Creds = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl">
        Certifications
      </motion.h2>
      <div>
        {CERTIFICATES.map((certificate, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4">
              <img 
                src={certificate.image} 
                width={350}
                height={350} 
                alt={certificate.title}
                className="mb-6 rounded" 
              />
            </motion.div>
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4">
              <a href="https://cp.certmetrics.com/amazon/en/public/verify/credential/41f3cd58926747828d304fa9fe47bd56" target="_blank" rel="noreferrer">
                <h6 className="mb-2 font-semibold">{certificate.title}</h6>
              </a>
              
              <p className="mb-4 text-neutral-400">{certificate.description}</p>
              <p className="text-sm text-neutral-400">{certificate.date}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Creds;
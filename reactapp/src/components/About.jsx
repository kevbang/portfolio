import aboutImage from "../assets/about.jpg";
import chicagoCafe from "../assets/ChiCafe.jpg";
import { FaArrowLeft } from 'react-icons/fa';
import { ABOUT_TEXT } from "../constants";
import { ABOUT_TEXT2 } from "../constants";
import { ABOUT_TEXT3 } from "../constants";

const About = () => {
return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">About 
            <span className="text-neutral-500"> Me!</span>
        </h2>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 lg:p-8 flex items-start">
                <div className="flex items-center justify-center space-x-4">
                    <img src={aboutImage} alt="about" className="rounded-2xl w-24 h-auto lg:w-96"/>
                    <img src={chicagoCafe} alt="about" className="rounded-2xl w-24 h-auto lg:w-96"/>
                    
                </div>
            </div>
            <div className="w-full lg:w-1/2 flex items-start mt-8 lg:mt-6 pr-4">
                <div className="flex flex-col justify-center lg:justify-start space-y-4">
                    <p className="max-w-xl">{ABOUT_TEXT}</p>
                    <p className="max-w-xl">{ABOUT_TEXT2}</p>
                    <p className="max-w-xl">{ABOUT_TEXT3}</p>
                    <p className="py-24 flex items-center"><FaArrowLeft className="mr-2"/>  Chicago, 12/20/2024</p>
                </div>
            </div>
        </div>
    </div>
);
}

export default About
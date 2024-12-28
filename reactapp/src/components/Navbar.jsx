import logo from "../assets/kevinTranSchool.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter} from "react-icons/fa6";

const Navbar = () => {
return (
        <nav className="mb-20 flex items-center justify-between py-6"> 
                        <div className="flex flex-shrink-0 items-center"> 
                                        <img className="mx-2 w-10" src={logo} alt="Iowa State Logo" style={{ width: '125px', height: 'auto', marginLeft: "25px", marginTop: "10px" }} />
                        </div>
                        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                                <a href="https://www.linkedin.com/in/kevintran77/" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin />
                                </a>
                                <a href="https://github.com/kevbang" target="_blank" rel="noopener noreferrer">
                                    <FaGithub />
                                </a>
                                <a href="https://www.instagram.com/kevbang7/" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram />
                                </a>
                        </div>
        </nav>
);

};

export default Navbar
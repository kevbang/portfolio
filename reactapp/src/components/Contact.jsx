import { CONTACT } from "../constants/index";
import { FaRegCopyright } from "react-icons/fa";

const Contact = () => {
return (
    <div className="border-b border-neutral-900 pb-20 flex justify-center items-center">
        <div className="text-center">
            <h2 className="my-10 text-4xl">Contact Me!</h2>
            <div className="tracking-tighter">
                <p className="my-4">{CONTACT.address}</p>
                <p className="my-4">{CONTACT.email}</p>
                <a href="https://www.linkedin.com/in/kevintran77" className="border-b">
                    {CONTACT.linked_in}
                </a>
                
            </div>
            <p className="my-4 flex justify-center"><FaRegCopyright/></p>
        </div>
    </div>
)
}

export default Contact
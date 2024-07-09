import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

import qZone1 from '../../assets/image/qZone1.png'
import qZone2 from '../../assets/image/qZone2.png'
import qZone3 from '../../assets/image/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl">Login With</h2>
                <button className="btn btn-outline w-full">
                <FaGoogle />
                Google
                </button>

                <button className="btn btn-outline w-full">
                <FaGithub />
                Github
                </button>
            </div>
            <div className="p-4 mb-6">
                <h2 className="text-3xl mb-2">Find Us On</h2>
                <a className="p-4 flex text-lg items-center border rounded-t-lg" href="">
                <FaFacebookSquare />
                <span className="mr-3">Facebook</span>
                </a>

                <a className="p-4 flex text-lg items-center border rounded-t-lg" href="">
                <FaTwitter />
                <span className="mr-3">Twiter</span>
                </a>

                <a className="p-4 flex text-lg items-center border rounded-t-lg" href="">
                <FaSquareInstagram />
                <span className="mr-3">Instagram</span>
                </a>
            </div>

        {/******************** */}

             <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl">Q Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
                
            </div>
        </div>
    );
};

export default RightSideNav;
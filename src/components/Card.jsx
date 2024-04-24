import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";




export default function Card() {
	return (
		<div >
        <br>
             
        </br>
			<div className="h-52 ml-24 sm:ml-2 md:ml-24 lg:ml-24 float-left 
							-mt-10 w-96 flex-col 
							rounded-xl bg-white bg-clip-border 
							text-gray-700 shadow-2xl sm:w-48 md:w-96 xsm:w-48  sm:ml-0">
				<div className="p-6">
					<h5 className="text-center mr-4 mb-2 
								block font-sans text-xl 
								font-semibold text-blue-gray-900 
								antialiased">
						Reach Us At
					</h5>
					<ul>
						<li className="mt-2">
							 
							<FaPhoneAlt /> +977- 9832222
						</li>
						<li className="mt-2">
							<span><i className=" "></i> </span>
							<span><MdEmail /> info@eerc.com.np</span>
						</li>
						 
						<li className="mt-2">
							 
							 
                            <FaLocationDot />
Lalitpur, 
							<span className="pl-4">
								Kathmandu
							</span>
						</li>
						{/* <li className="mt-2">
							<span><i className="fa-solid fa-map-pin mr-2">Follow Us , <BsFacebook /></i>
							 
							</span>
                            
							<span className="pl-4">
							 
							</span>
						</li> */}
					</ul>
				</div>
			</div>

		</div>
	)
}

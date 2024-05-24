import React, {useRef, useState} from 'react'
import Icons from './Icons'
import Card from './Card'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser"
 

 
import FooterWithSocialMediaIcons from './FooterWithSocialMediaIcons'
const Contacts = () => {
  
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
      });
    
      const [submitted, setSubmitted] = useState(false);
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        try {
          // const response = await axios.post("https://eerc-backend.vercel.app/", formData);
          // console.log(response.data);
          // setSubmitted(true);
       
          // setFormData({
          //   name: "",
          //   email: "",
          //   message: "",
          // });
          e.preventDefault();
          const templateParams = {
            name: `Name: ${formData.name}`,
            email: `Email: ${formData.email}`,
             phoneNumber: `PhoneNumber: ${formData.phoneNumber}`,
            message: `Message: ${formData.message}`,
          };
        
          emailjs
            .send('service_1s76wgy', 'template_felef2a', templateParams, {
              publicKey: '71MgpcnsoXIlHE3TB',
            })
            .then(
              (response) => {
                console.log('SUCCESS!', response.status, response.text);
                setFormData({name: "",
                email: "",
                phoneNumber: "",
                message: ""})
              },
              (err) => {
                console.log('FAILED...', err);
              },
            );
         }catch (error) {
          console.error("Error submitting form:", error);
          
        }
      }
    
  return (
    <>
    <br>

    </br>   
        
        
        <div className="bg-white dark:bg-gray-900">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2  className="font-sans Montserrat  text-2xl font-bold text-amber-500	  mb-8 text-center ">Contact Us</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">  Want to send feedback ? Need details about our services  ? Let us know.</p>
      <form   className="space-y-8" onSubmit={handleSubmit}>  
          <div>
              <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
              <input type="text" id="name" name='name' onChange={handleChange} value={formData.name} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Full Name" required />
          </div>
          <div>
              <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
              <input type="email" id="email" name='email' onChange={handleChange} value={formData.email}  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="xyz@gmail.com" required />
          </div>
          <div className="sm:col-span-2">
              <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your messages</label>
              <textarea id="message" rows="6"  name="message" onChange={handleChange} value={formData.message}  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-orange-500 sm:w-fit hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
      </form>
      
  </div>
  
  <div className='flex items-center	px-56 '>


  <Card />
  <iframe  className="mt-2 pt-2 maps px-7 rounded-lg sm:block ml-12 mb-6" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.030738341657!2d85.31775997520516!3d27.68544482645749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19c8b9b9e217%3A0xd19bda6f193c60b6!2sEnvironment%20and%20Engineering%20Research%20Center%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1706298883336!5m2!1sen!2sin" ></iframe>




  
  {/* <div className=' border mx-3 mb-3 '>
  <iframe className="mt-2 pt-2 maps px-7 rounded-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.030738341657!2d85.31775997520516!3d27.68544482645749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19c8b9b9e217%3A0xd19bda6f193c60b6!2sEnvironment%20and%20Engineering%20Research%20Center%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1706298883336!5m2!1sen!2sin" ></iframe>

  </div> */}

  </div>
  
</div>
<FooterWithSocialMediaIcons />
    </>
  )
}

export default Contacts
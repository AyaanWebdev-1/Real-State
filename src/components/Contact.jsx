import React from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

function Contact() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "7eb3a08b-9c71-4930-a0de-3988f9b5a111");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("");
        toast.success("Form Submitted Successfully")
        event.target.reset();
      } else {
        console.log("Error", data);
        toast.error(data.message)
        setResult("");
      }
    };
  return (
    <motion.div 
    initial={{opacity:0,x:-200}}
      transition={{duration:1}}
      whileInView={{opacity:1,x:0}}
      viewport={{once:true}}
    className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden" id="Contacts">
    <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">Contact<span className="underline underline-offset-4 decoration-1 under font-medium"> with Us</span></h1>
    <p  className="text-center text-gray-500 mb-12 max-w-80 mx-auto">Ready To Make A Move ? Let's Build Your Future Togetther</p>

    <form onSubmit={onSubmit}className="max-w-2xl mx-auto text-gray-600 pt-8 " >
        <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 text-left">Your Name 

            <input type="text" placeholder="Your Name " required className="w-full border border-gray-300 rounded py-3 px-4 mt-2" name="Name"/>
            </div>
            <div className="w-full md:w-1/2 text-left md:pl-4">Your Email 

                <input type="email" placeholder="Your Email" required className="w-full border border-gray-300 rounded py-3 px-4 mt-2" name="Email"/>
                </div>
            <div className="my-6 text-left w-full">
                Message
                <textarea className=" w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
                name="message" placeholder="Message" id="" required></textarea>
            </div>
            <button className="bg-blue-600 text-white py-2 px-12 mb-10 rounded">{result?result:"Send Message"}</button>
        </div>
    </form>
    </motion.div>
  )
}

export default Contact

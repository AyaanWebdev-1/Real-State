import Navbar from "./Navbar"
import {motion} from 'framer-motion'

function Header() {
  return (
    
    <div className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden bg-image" style={{backgroundImage:"url('header-img.png')",}} id="header">
      <Navbar/>
      <motion.div
      initial={{opacity:0,y:100}}
      transition={{duration:1.5}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
      
      className="container text-center mx-auto py-4 px-6 lg:px-32 md:px-20 text-white  "> 
        <h2 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20">Explores homes that fit your dream</h2>
        <div className="space-x-6 mt-16">
            <a href="#Projects" className="border border-white px-8 py-3 rounded">Projects</a>
            <a href="#Contact"  className="border border-blue-500 px-8 py-3 rounded bg-blue-500">Contact Us</a>
        </div>
      </motion.div>
    </div>
  )
}

export default Header

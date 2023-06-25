import {motion} from "framer-motion"
import { useState } from "react"
import { useMediaQuery } from "../../utilities/useMediaQuery"

const navMotion = {
    visible: {
      opacity: 1,
  
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
    hidden: {
      opacity: 0,
    },
  }
  const itemMotion = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 100 },
  }

  

export default function navs(){

    const [toggled, setToggled] = useState(false)
    const matches = useMediaQuery("(min-width: 1280px)")
    return(
        <nav className= "relative mx-8 mb-20 flex justify-between items-center p-5 md:mx-16 lg:mx-32">
              
            <svg 
            className="absolute bottom-0 left-1/2 -translate-x-1/2"
            width="300"
            height={4}
            viewBox="0 0 250 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L428 2" stroke="#f2f2f2" strokeLinecap="round" strokeWidth={1}/>
            </svg>

            <div>
                <a href="/"><h1 className="text-xl transition duration-300 ease-in-out hover:scale-110">AIBRY OFFICIAL</h1></a>
            </div>

            {matches && (
            <div className="text-lg flex gap-6">
                <a className="transition duration-300 ease-in-out hover:text-gray-200" href="/profile">PROFILE</a>
                <a className="transition duration-300 ease-in-out hover:text-gray-200" href="/news">NEWS</a>
                <a className="transition duration-300 ease-in-out hover:text-gray-200" href="/media">MEDIA</a>
                <a className="transition duration-300 ease-in-out hover:text-gray-200" href="/contact">CONTACT</a>
            </div>
            )}

            {!matches && (
            <div onClick={() => setToggled((prevToggle) => !prevToggle)} 
                className="space-y-2 cursor-pointer z-50">
                <motion.span animate={{rotateZ: toggled ? 45 : 0, y: toggled ? 10 : 0}} className="block h-0.5 w-6 bg-black"></motion.span>
                <motion.span animate={{width: toggled? 0 : 24}} className="block h-0.5 w-6 bg-black"></motion.span>
                <motion.span animate={{rotateZ: toggled ? -45 : 0, y: toggled ? -10 : 0}} className="block h-0.5 w-6 bg-black"></motion.span>
            </div>
            )}

            {toggled && !matches &&(
            <div
                className="z-40 fixed bottom-0 left-0 w-full h-screen bg-white flex items-center justify-center">
               <motion.div variants={navMotion} animate="visible" initial="hidden" className="flex flex-col gap-24">
                    <motion.a variants={itemMotion} href="/profile">PROFILE</motion.a>
                    <motion.a variants={itemMotion} href="/news">NEWS</motion.a>
                    <motion.a variants={itemMotion} href="/media">MEDIA</motion.a>
                    <motion.a variants={itemMotion} href="/contact">CONTACT</motion.a>
                </motion.div>
                
            </div>
            )}
        </nav>
    )
}

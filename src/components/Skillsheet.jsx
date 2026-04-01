import React from 'react'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const Skillsheet = () => {
  return (
    <div class="xl:mt-12 w-full py-20">
        <motion.div variants={textVariant()}>
            <h2 class="text-2xl md:text-3xl font-semibold mb-6 text-gray-800 text-center">
                Download Skillsheet
            </h2>
            <p class="text-gray-500 mb-8 text-center">
                Get a copy of Edsel Nombrado skillsheet in PDF format.
            </p>
        </motion.div>

        <motion.div variants={fadeIn("", "", 0.1, 1)}>
            <div className="flex justify-center">
                <a href="/src/assets/Edsel_Nombrado_Skillsheet.pdf" download
                className="inline-flex items-center gap-3 px-6 py-3 
                            bg-tertiary text-white rounded-lg 
                            text-sm md:text-base font-medium shadow-md 
                            border border-transparent
                            hover:bg-transparent hover:border hover:border-white 
                            transition duration-300"
                >
    
                    {/* <!-- Icon --> */}
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        class="w-5 h-5" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                            d="M12 4v12m0 0l-4-4m4 4l4-4m-9 8h10"/>
                    </svg>
    
                    Download Resume
                </a>
            </div>
        </motion.div>
    </div>
  )
}

export default Skillsheet

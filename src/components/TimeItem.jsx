
import { motion,useScroll } from "framer-motion";
import { useRef } from "react";

export const TimeItem=({ startDate,finishDate,title,description})=>{

    const ref = useRef(null);
    const {scrollYProgress}= useScroll({
        target:ref,
        offset:["0 1  ","1 1"],
    });
    const visible = { opacity: 1, y: 0,  };

    return (
        <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">

            </div>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible
                    }}
                ref={ref}
                initial={{ opacity: 0, x: 50 }} // posición inicial: oculto a la izquierda
                animate={{ opacity: 1, x: 0 }} // posición final: visible en su posición normal
                transition={{ duration: 4, delay: 0.2 }}
                style={{ 
                
                    zIndex:0,
                    scale: scrollYProgress,
                    opacity: scrollYProgress,
    
                 }}
            >
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {startDate} - {finishDate} </time>
            
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {title}</h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                {description}
            </p>
            </motion.div>
            
  
        </li>
    );
}
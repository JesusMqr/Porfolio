import { Tag } from "./Tag";
import altImage from "../assets/origamiWeb.jpeg";
import { motion,useScroll } from "framer-motion";
import React,{ useRef } from "react";

export const ProjectItem = ({ title,status, description, urlGithub, urlDeploy, urlImage = altImage, tag }) => {
    const ref = useRef(null);
    const {scrollYProgress}= useScroll({
        target:ref,
        offset:["0 1  ","1.11 1"],
    });
    const visible = { opacity: 1, y: 0, transition: { duration: 1} };
    
    return (
        
        <motion.div
            ref={ref}
            variants={{
                hidden: { opacity: 0, y: -20 },
                visible
                }}
            style={{ 
                
                zIndex:0,
                scale: scrollYProgress,
                opacity: scrollYProgress,

             }}
        >
            <div className=" grid grid-cols-1 md:grid-cols-2 border-4 rounded-lg">
            <img src={urlImage}
                alt="" className="h-full rounded-tl-lg  md:rounded-bl-lg rounded-tr-lg md:rounded-tr-none " />
            <div className="p-5 flex flex-col gap-5  justify-around text-center md:text-start">
                <div className="flex justify-between">
                <h3 className="text-xl font-bold" >{title}</h3>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5
                 py-1 rounded-full dark:bg-yellow-900 dark:text-yellow-300">{status}</span>

                </div>
                <p className="text-md">
                    {description}
                </p>
                
                
                <div>
                    {
                        tag.map(({ text }, index) => (
                            <Tag key={index}
                                text={text}
                            />
                        ))
                    }
                </div>
                <div className="md:text-end text-center flex justify-center md:justify-end py-5 gap-5 md:py-0" >
                {urlGithub && (
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                        <a
                        href={urlGithub}
                        className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        >
                        Ver repositorio
                        </a>
                    </motion.div>
                )}
                {urlDeploy && (
                    <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    <a
                    href={urlDeploy}
                    className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                    Ver proyecto
                    </a>
                </motion.div>
                    
                )}
                    
                    

                    
                </div>
            </div>
        </div>
        </motion.div>
    )
}
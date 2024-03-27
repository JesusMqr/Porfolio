import { motion } from "framer-motion";

export const Badge =({url,image,title})=>{
    return (
        <motion.a
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 5 ,duration:4}}
        initial={{ opacity: 0, y: 50 }} // posición inicial: oculto a la izquierda
        animate={{ opacity: 1, y: 0 }} // posición final: visible en su posición normal
        
        href={url}
        type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
        {image}
        {title}
        </motion.a>
        
    );
}
import { Badge } from "../components/Badge"
import { GithubIcon } from "../icons/Github";
import { LinkedinIcon } from "../icons/Linkedin"
import { MailIcon } from "../icons/Mail";
import { motion } from "framer-motion";

const SocialData = [
    {
        url: "https://www.linkedin.com/in/jesusmaqueradev/",
      title: "LinkedIn",
      image: <LinkedinIcon />
    },
    {
        url: "https://github.com/JesusMqr",
        title: "GitHub",
        image: <GithubIcon/>,
    },
    {
        url: "https://mail.google.com/mail/?view=cm&to=jesusmaquera10@gmail.com",
        title: "jesusmaquera10@gmail.com",
        image:<MailIcon/>
    },
]
  

export const Presentation=()=>{
    const visible = { opacity: 1, y: 0, transition: { duration: 1} };


    return(
        
        <section id="home" className=" min-h-screen w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
            <motion.article
            className="my-44 text-white text-center max-w-screen-lg mx-auto"
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 1} }}
            variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
            >
                <motion.h1
                className="text-6xl"
                variants={{
                hidden: { opacity: 0, y: -20 },
                visible
                }}
                >
                Hola, mi nombre es <span className="text-violet-700 font-bold" 
                        >Jesus Maquera</span> y soy Desarrollador de Software
                </motion.h1>
                
                <motion.p 
                className="my-10 text-xl" 
                variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible}}
                >
                Tecnico en Ingenieria de Software residente en Perú. Me especializo en el Desarrollo Web Full-Stack, siempre buscando la oportunidad de aprender y aplicar mis conocimientos adquiridos
                </motion.p>

                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <div
                
                >
                    {SocialData.map(({url,title,image},index)=>(
                        <Badge
                        key={index}
                        url={url}
                        title={title}
                        image={image}
                        />
                    ))}
                </div>
            
            </motion.article>
            
        </section >
        
    )
}
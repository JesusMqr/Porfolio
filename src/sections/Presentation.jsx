import { Badge } from "../components/Badge"
import { GithubIcon } from "../icons/Github";
import { LinkedinIcon } from "../icons/Linkedin"
import { MailIcon } from "../icons/Mail";

const SocialData = {
    linkedin: {
      url: "https://www.linkedin.com/in/jesusmaqueradev/",
      title: "LinkedIn",
      image: <LinkedinIcon />
    },
    github:{
        url: "https://github.com/JesusMqr",
        title: "GitHub",
        image: <GithubIcon/>,
    },
    email:{
        url: "https://mail.google.com/mail/?view=cm&to=jesusmaquera10@gmail.com",
        title: "jesusmaquera10@gmail.com",
        image:<MailIcon/>
    }
    // Puedes agregar más redes sociales según sea necesario
  };

export const Presentation=()=>{
    return(
        <section id="home" className=" min-h-screen w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
            <div className=" my-44 text-white text-center max-w-screen-lg mx-auto">
                <h1 className="text-6xl" >Hola, mi nombre es <span className="text-violet-700 font-bold" 
                >Jesus Maquera</span> y soy Desarrollador de Software</h1>
                <p className="my-10 text-" >Tecnico en Ingenieria de Software residente en Perú. Me especializo en el Desarrollo Web Full-Stack, siempre buscando la oportunidad de aprender y aplicar mis conocimientos adquiridos</p>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <div>
                    {Object.values(SocialData).map(({url,title,image},index)=>(
                        <Badge
                        key={index}
                        url={url}
                        title={title}
                        image={image}
                        />
                    ))}
                </div>
            </div>
        </section >
        
    )
}
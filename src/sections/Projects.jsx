import { ProjectItem } from "../components/ProjectItem";
import webStore from '../assets/webStore.png';
import logoApi from '../assets/LogoApi.jpeg';
import laraInventory from '../assets/LaraInventoryApp.jpeg';

const ProjectsData = [
    {
        status:"Culminado",
        title:"WebStore",
        urlImage:webStore,
        description:"Pagina web creada con react, esta pagina tiene como objetivo ser una galeria de paginas web.",
        urlGithub:"https://github.com/JesusMqr/WebStore",
        urlDeploy:"https://web-store-gules-alpha.vercel.app/",
        tag:[
            {
                text:"react"
            },
            {
                text:"vite"
            },
            {
                text:"tailwind"
            }
        ]
    },
    {
        status:"En desarrollo",
        title:"AuthApi",
        description:"Api Rest hecha con Laravel 11, posee peticiones auth, relaciones entre tablas y equipos.",
        urlImage:logoApi,
        urlGithub:"https://github.com/JesusMqr/LaravelApi",
        
        tag:[
            {
                text:"Laravel"
            }

        ]
    },
    {
        status:"Culminado",
        title:"LaraInventory",
        description:"Aplicacion web para la gestion de inventarios, manejo de categorias, seguimiento de stock de productos, usuarios y roles.",
        urlImage:laraInventory,
        urlGithub:"https://github.com/JesusMqr/LaraInventory-app",
        tag:[
            {
                text:"laravel"
            },
            {
                text:"tailwind"
            },
        ]
    }
];




export const Projects =()=>{
    


    return(
        <>
        
      <section id="projects" className="  h-full w-full bg-gradient-to-r from-slate-950 via-slate-800 to-slate-950">
            <div className="text-white py-20 max-w-screen-sm px-5 md:px-10  md:max-w-screen-lg   mx-auto">
                <h2 className=" text-2xl md:text-3xl font-semibold" >PROYECTOS</h2>
                
                <div className="py-10 flex flex-col gap-10">

                    {ProjectsData.map((item,index) =>(
                        <ProjectItem key={index}
                        status={item.status}
                        urlImage={item.urlImage}
                        title={item.title}
                        description={item.description}
                        tag={item.tag}
                        urlDeploy={item.urlDeploy}
                        urlGithub={item.urlGithub}
                        />
                    ))}


                    
                </div>
            </div>
            
            
        </section>
        </>
        

    );
}
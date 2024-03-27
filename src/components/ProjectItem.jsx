import { Tag } from "./Tag";
import altImage from "../assets/origamiWeb.jpeg";

export const ProjectItem = ({ title,status, description, urlGithub, urlDeploy, urlImage = altImage, tag }) => {
    return (
        
        <div className="">
            <div className=" grid grid-cols-1 md:grid-cols-2 border-4 rounded-lg">
            <img src={urlImage}
                alt="" className="h-full rounded-tl-lg  md:rounded-bl-lg rounded-tr-lg md:rounded-tr-none " />
            <div className="p-5 flex flex-col   justify-around text-center md:text-start">
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
                <div className="md:text-end text-center py-5 md:py-0" >
                {urlGithub && (
                    <a
                    href={urlGithub}
                    className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                    Ver repositorio
                    </a>
                )}
                {urlDeploy && (
                    <a
                    href={urlDeploy}
                    className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                    Ver proyecto
                    </a>
                )}
                    
                    

                    
                </div>
            </div>
        </div>
        </div>
    )
}
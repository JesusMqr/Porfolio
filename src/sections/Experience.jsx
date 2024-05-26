import { TimeItem } from "../components/TimeItem"

const experienceData = [
    {
        startDate:"Abril 2023",
        finishDate:"Junio 2023",
        title:"IE Mariscal Andres Avelino Caceres - Diseño de pagina web",
        description:"Durante mi estancia en la Institucion se realizo el diseño y desarrollo de la aplicacion web usando HTML5, CSS3 y JavaScript, como herramienta principal se uso el framework Bootstrap 5."
    },
    {
        startDate:"Agosto 2023",
        finishDate:"Diciembre 2023",
        title:"CITV ILO S.A.C. - Diseño de Aplicacion web para el registro de clientes",
        description:"Durante la estancia en la empresa se realizo el desarrollo de una aplicacion web destinada al registro de clientes, esta aplicacion web hecha en el framework Laravel y Bootstrap."
    }
]
    


export const Experience =()=>{
    return (
        <div id="experience" className="  h-full w-full bg-slate-900">
            <div className="mx-auto max-w-screen-sm px-5 md:px-10 md:max-w-screen-lg py-20 text-white">
            <h2 className="text-2xl  md:text-3xl mb-10 font-semibold" >EXPERIENCIA</h2>
        
            <ol className="relative border-s border-gray-200 dark:border-gray-700">

                {experienceData.map(({startDate,finishDate,title,description},index)=>(
                 <TimeItem
                    key={index}
                    startDate={startDate}
                    finishDate={finishDate}
                    title={title}
                    description={description}
                 />   
                ))}
            </ol>

            </div>
        </div>
        


    )
}
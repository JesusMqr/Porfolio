import { useState } from 'react'
import { useEffect } from 'react'


export const ThemeButton=()=>{
    const [theme,setTheme] = useState(()=>{
        //verifica si el sistema tiene dark como valor por defecto
        if (window.matchMedia('(prefers-color-scheme:dark)').matches)
        return "dark"
    })
    
      //Realiza el cambio de theme añadiendo la clase dark
      useEffect(()=>{
        
        if (theme === 'dark') {
          document.querySelector('html').classList.add('dark')
        }else{
          document.querySelector('html').classList.remove('dark')
        }
      },[theme])
    
      //funcion para cambiar el thema
      const handleChangeTheme =()=>{
        setTheme(prevTheme => prevTheme === "light" ? "dark":'light' )
      }
      return(
          <button onClick={handleChangeTheme}
          className='bg-slate-200 dark:bg-blue-950 dark:text-white px-4 py-2 rounded-sm cursor-pointer'>Change Theme</button>
      );

    
}
//estado inicial de theme
  
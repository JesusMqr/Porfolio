import './App.css';
import { Header } from './Header';
import { ThemeButton } from './components/ThemeChangerButton';
import { Experience } from './sections/Experience';
import { Presentation } from './sections/Presentation';
import { Projects } from './sections/Projects';

export const App =()=> {
  return (
    <>
      
      <Header/>
      <Presentation/>
      <Projects/>
      <Experience/>
      
      



    </>
  );
}

export default App;

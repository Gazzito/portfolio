import "./App.css";
import NavbarSimple from "./components/NavbarSimple.js";
import Scroll from "./components/Scroll";
import Biography from "./components/Biography";
import Introduction from "./components/Introduction";
import Separator from "./components/Separator";
import Skills from "./components/Skills";
function App() {
  return (
    <div className="App scroll-smooth">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"></link>
      <NavbarSimple/>
      <Scroll>
      <section>
        <Introduction/>

        <Biography/>
        
        <Skills/>
      </section>
      </Scroll>
    </div>
  );
}

export default App;

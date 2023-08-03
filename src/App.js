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
      <NavbarSimple/>
      <Scroll>
      <section>
        <Introduction/>
        <Separator/>
        <Biography/>
        <Separator />
        <Skills/>
      </section>
      </Scroll>
    </div>
  );
}

export default App;

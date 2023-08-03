import logo from "./logo.svg";
import "./App.css";
import NavbarSimple from "./components/NavbarSimple.js";
import Scroll from "./components/Scroll";
import Biography from "./components/Biography";
import Introduction from "./components/Introduction";

function App() {
  return (
    <div className="App scroll-smooth">
      <NavbarSimple/>
      <Scroll>
      <section>
      
        <Introduction/>
        <div className="px-6 bg-primary text-hoverColor" ><hr className="opacity-50"></hr></div>
        <Biography/>
      </section>
      </Scroll>
    </div>
  );
}

export default App;

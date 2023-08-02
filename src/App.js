import logo from "./logo.svg";
import "./App.css";
import NavbarSimple from "./components/NavbarSimple.js";
import Scroll from "./components/Scroll";
import Biography from "./components/Biography";
import Introduction from "./components/Introduction";

function App() {
  return (
    <div className="App">
      <NavbarSimple/>
      <Scroll>
      <section>
        <Introduction/>
        <Biography/>
      </section>
      </Scroll>
    </div>
  );
}

export default App;

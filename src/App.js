import "./App.css";
import Tablazat from "../src/components/Tablazat";
import Hozzaadas from "../src/components/Hozaadas";
import Szamlalo from "../src/components/Szamlalo";
import Nav from "../src/components/Nav";

import { BrowserRouter as  Routes, Route } from "react-router-dom";
import Admin from "./components/Admin";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Kizöldítjük a Földet</h1>
      </header>

      <Nav />

      <article>
        <Routes>
          <Route path="/" element=
          {<>
                <Hozzaadas />
                <Szamlalo />
                <Tablazat />
          </>}/>
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </article>
    </div>
  );
}

export default App;

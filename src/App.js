import "./App.css";
import Tablazat from "../src/components/Tablazat";
import Hozzaadas from "../src/components/Hozaadas";
import Szamlalo from "../src/components/Szamlalo";
import Nav from "../src/components/Nav";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Kizöldítjük a Földet</h1>
      </header>
      <article>
        <Nav />
        <Hozzaadas />
        <Szamlalo />
        <Tablazat />
      </article>
    </div>
  );
}

export default App;

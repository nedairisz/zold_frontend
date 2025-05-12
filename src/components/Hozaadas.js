import React, { useState } from "react";
import useAdatContext from "../contexts/AdatContext";

export default function Hozzaadas() {
  const { tevekenyseLista, setBejegyzeslista, postAdat } = useAdatContext();
  const osztalyLista = ["10A", "7B", "11C", "10B", "12A"];

  const { osztaly, setOsztaly } = useState("Válassz");
  const { tevekenyseg, setTevekenyseg } = useState("Válassz");

  function hozzaad(event) {
    event.preventDefault();
    let adat = {
      tevekenyseg_id: tevekenyseg,
      osztaly_nev: osztaly,
    };
    if (!(osztaly === "valassz" || tevekenyseg === "valassz")) {
      postAdat(adat, "api/bejegyzes", setBejegyzeslista);
    } else {
      console.log("hibás adatok");
    }
  }

  return (
    <form onSubmit={hozzaad}>
      <select
        id="osztaly"
        name="osztaly"
        onChange={(event) => setOsztaly(event.target.value)}
      >
        <option value="valassz">Válassz osztályt!</option>
        {osztalyLista.map((element, index) => {
          return (
            <option key={index} value={element}>
              {element}
            </option>
          );
        })}
      </select>
      <select
        id="tevekenyseg"
        name="tevekenyeg"
        onChange={(event) => setTevekenyseg(event.target.value)}
      >
        <option value="valassz">Válassz tevékenységet!</option>
        {osztalyLista.map((element, index) => {
          return (
            <option key={index} value={element}>
              {element}
            </option>
          );
        })}
      </select>
      <input type="submit" className="btn btn-success" value="Küld" id="submit"
      />
    </form>
  );
}

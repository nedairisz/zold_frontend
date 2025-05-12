import React from "react";
import Fejlec from "./Fejlec";
import useAdatContext from "../contexts/AdatContext";
import Sor from "./Sor";

export default function Tablazat() {
  const { bejegyzesLista  } = useAdatContext();

  return (
    <table>
      <thead>
        <Fejlec />
      </thead>
      <tbody>
      {bejegyzesLista.map((elem) => (
          <Sor key={elem.id} adat={elem} />
        ))}
      </tbody>
    </table>
  );
}

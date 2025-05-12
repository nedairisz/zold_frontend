import React from "react";
import Fejlec from "./Fejlec";
import useAdatContext from "../contexts/AdatContext";
import Sor from "./Sor";


export default function Tablazat() {
  const { bejegyzesLista  } = useAdatContext();

  return (
    <div style={{ padding: "3em", border: "1px solid #ccc", borderRadius: "8px" }}>
   
    <table className="table table-striped">
      <thead>
        <Fejlec />
      </thead>
      <tbody>
      {bejegyzesLista.map((elem) => (
          <Sor key={elem.id} adat={elem} />
        ))}
      </tbody>
    </table>
     </div>
  );
}

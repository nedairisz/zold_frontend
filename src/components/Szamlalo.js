import React from "react";
import useAdatContext from "../contexts/AdatContext";

export default function Szamlalo() {
  const { bejegyzesLista } = useAdatContext(); 


  const calculateTotalPoints = (osztaly) => {
    return bejegyzesLista
      .filter((bejegyzes) => bejegyzes.osztaly_nev === osztaly)
      .reduce((total, bejegyzes) => total + bejegyzes.pontszam, 0); 
  };

  
  const osztalyLista = ["10A", "7B", "11C", "10B", "12A"];

  return (
    <div style={{ padding: "3em", border: "1px solid #ccc", borderRadius: "8px" }}>
    <table className="table table-striped">
      <thead>
        
          <th>Osztály</th>
          <th>Össz pontszám</th>
        
      </thead>
      <tbody>
        {osztalyLista.map((osztaly) => {
          const totalPoints = calculateTotalPoints(osztaly); 
          return (
            <tr key={osztaly}>
              <td>{osztaly}</td>
              <td>{totalPoints}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
  );
}

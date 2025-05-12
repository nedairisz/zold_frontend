import React from "react";
import useAdatContext from "../contexts/AdatContext";

export default function Szamlalo() {
  const { bejegyzesLista } = useAdatContext(); // Get bejegyzesLista from context

  // Calculate total points for each class
  const calculateTotalPoints = (osztaly) => {
    return bejegyzesLista
      .filter((bejegyzes) => bejegyzes.osztaly_nev === osztaly)
      .reduce((total, bejegyzes) => total + bejegyzes.pontszam, 0); // Sum the points for the class
  };

  // Get the list of unique classes (osztaly)
  const osztalyLista = ["10A", "7B", "11C", "10B", "12A"];

  return (
    <table>
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
  );
}

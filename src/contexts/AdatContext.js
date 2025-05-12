import { createContext, useContext, useState, useEffect } from "react";
import axios from "./Axios.js";

const AdatContext = createContext();

export const AdatProvider = ({ children }) => {
/* Két változó állapotától függ az oldal megjelenése: a bejegyzésListától és a tevekenységListától. Ezek figyelésére state-ket hozunk létre */
  const [bejegyzesLista, setBejegyzesLista] = useState([]);
  const [tevekenysegLista, setTevekenysegLista] = useState([]);

  /* az adatok lekérése a végpontról axiosszal */
  const getLista = async (vegpont, callback) => {
    const { data } = await axios.get(vegpont);
    callback(data);
  };

 
  const postAdat = async (adat, vegpont) => {   /* adatok küldése a szerverre axiosszal */
    try {                                       /* elküldjük a végpontra az adatot */
      await axios.post(vegpont, adat);
      getLista("api/bejegyzesek", setBejegyzesLista); // újra lekérem az adatokat, hogy frissüljön a lista
    } catch (error) {
      console.log(error);
    }
  };

  /* akonkrét adatok lekérése, végpontok hívása callback függvényekkel */
  useEffect(() => {
    getLista("api/bejegyzesek", setBejegyzesLista);
    getLista("api/tevekenysegek", setTevekenysegLista);
  }, []);

  /* Provider elkészítése, komponensekben használható változók és függvények megadása */
  return (
    <AdatContext.Provider
      value={{ bejegyzesLista, tevekenysegLista, postAdat }}
    >
      {children}
    </AdatContext.Provider>
  );
};

export default function useAdatContext() {
  return useContext(AdatContext);
}

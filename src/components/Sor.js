import React from 'react';

export default function Sor({adat}){
    return(
        <tr>
            <td>{adat.id}</td>
            <td>{adat.osztaly.osztaly_nev}</td>
            <td>{adat.tevekenyseg.tevekenyseg_nev}</td>
            
        </tr>
    );
}
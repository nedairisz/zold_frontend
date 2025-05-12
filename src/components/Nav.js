import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav(){
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/publikus" >Publikus</Link>
                </li>
                <li>
                    <Link to="/admin">Admin</Link>
                </li>
            </ul>
        </nav>
    );
}
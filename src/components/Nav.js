import React from "react";
import { Link } from "react-router-dom";
import "../App.css";


export default function Nav() {
  return (
    <nav className="my-3">
      <ul className="nav">
        <li className="nav-item">
          <Link  className="nav-link" to="/publikus">Publikus</Link>
        </li>
        <li>
          <Link className="nav-link" to="/admin">Admin</Link>
        </li>
      </ul>
    </nav>
  );
}

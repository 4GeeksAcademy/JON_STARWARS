import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../store";

export default function Navbar() {
  const { state } = useContext(GlobalContext);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <img
            src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"
             alt="Star Wars Databank Logo"
                height="40"
                style={{ marginRight: "0.5rem" }}
          />

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav me-auto">
              <li className="nav-item"><Link className="nav-link" to="/demo">Personajes</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/planets">Planetas</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/vehicles">Vehículos</Link></li>
            </ul>
            <Link to="/favorites" className="btn btn-outline-warning">
              Favoritos <span className="badge bg-dark">{state.favorites.length}</span>
            </Link>
          </div>
        </div>
      </nav>
      <div className="hyperdrive"></div>
    </>
  );
}

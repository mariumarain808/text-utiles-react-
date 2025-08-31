import { Link } from 'react-router-dom';
import "./App.css";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand " to="/">{props.title}</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
           
            <li className="nav-item">
              <Link className="nav-link " to="/textarea">Textarea</Link>
            </li>
             <li className="nav-item">
              <Link className="nav-link " to="/about">About</Link>
            </li>
          </ul>
        </div>

        <div className="form-check form-switch">
          <input 
            className="form-check-input" 
            type="checkbox" 
            role="switch" 
            onClick={props.toggleMode} 
            id="switchCheckDefault" 
          />
          <label className="form-check-label" htmlFor="switchCheckDefault">
            Enable {props.mode === "light" ? "Dark" : "Light"} Mode
          </label>
        </div>
      </div>
    </nav>
  );
}

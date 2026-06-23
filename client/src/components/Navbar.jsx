import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>Function Hall</h2>

      <div>
        <Link to="/">Home</Link>

        <Link to="/halls">
          Halls
        </Link>

        <Link to="/login">
          Login
        </Link>

        <Link to="/register">
          Register
        </Link>

        <Link to="/admin">
          Admin
        </Link>
      </div>
    </nav>
  );
}
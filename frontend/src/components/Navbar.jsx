import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="brand-icon">✓</span>
        Task Tracker
      </div>

      <div className="navbar-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/add">Add Task</NavLink>
        <NavLink to="/tasks">View Tasks</NavLink>
      </div>

    </nav>
  );
}

export default Navbar;
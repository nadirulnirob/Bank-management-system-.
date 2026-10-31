import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Dashboard", end: true },
  { to: "/deposit", label: "Deposit" },
  { to: "/withdraw", label: "Withdraw" },
  { to: "/transactions", label: "Transactions" }
];

export default function Navbar() {
  return (
    <header className="topbar">
      <div className="nav-inner">
        <NavLink to="/" className="brand">
          <span className="brand-icon">G</span>
          <span>Green<span className="brand-light">Bank</span></span>
        </NavLink>
        <nav className="nav-links" aria-label="Main navigation">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

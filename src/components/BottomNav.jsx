import { Home, Search, ClipboardList, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function BottomNav() {
  const location = useLocation();

  return (
    <div className="bottom-nav">
      <Link
        to="/home"
        className={location.pathname === "/home" ? "active" : ""}
      >
        <Home size={19} />
        Home
      </Link>

      <Link
        to="/services"
        className={location.pathname === "/services" ? "active" : ""}
      >
        <Search size={19} />
        Services
      </Link>

      <Link
        to="/track"
        className={location.pathname === "/track" ? "active" : ""}
      >
        <ClipboardList size={19} />
        Applications
      </Link>

      <Link to="/home">
        <User size={19} />
        Profile
      </Link>
    </div>
  );
}
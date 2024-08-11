import "./navbar.css"
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/register");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">SukSaang</span>
        <div className="navItems">
          <button className="navButton" onClick={handleRegisterClick}>Register</button>
          <button className="navButton" onClick={handleLoginClick}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
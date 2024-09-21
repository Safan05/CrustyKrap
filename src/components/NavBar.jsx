import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import icon from '../assets/icon.png';
function Navbar({count,user}) {
  // Use state to track the collapse state
  const [isCollapsed, setIsCollapsed] = useState(true);
  // Toggle the collapse state when the button is clicked
  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
      <NavLink className="navbar-brand" to="#">سلطع برجر <img src={icon} alt="" style={{width:70}}></img> </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        onClick={handleToggle}
        aria-controls="navbarNavAltMarkup"
        aria-expanded={!isCollapsed}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${!isCollapsed ? 'show' : ''}`} id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></NavLink>
          <NavLink className="nav-item nav-link" to="/menu">Menu</NavLink>
          <NavLink className="nav-item nav-link" to="/shoppingcart">ShoppingCart</NavLink>
          {user&&user.isAdmin&&<NavLink className="nav-item nav-link" to="/Admin">Admin</NavLink>}
          <NavLink className="nav-item nav-link" to="/Register">Register</NavLink>
          <NavLink className="nav-item nav-link" to="/login">Login</NavLink>
        </div>
        <div className='badge bg-primary'>{count}</div>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;

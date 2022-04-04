import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { AppContext } from "../../App";
import logo from "../../images/TBPL_Logo.svg";
import pageData from "./../../pageData/data";
import "./Navbar.css";

const Navbar = () => {
  const { navbar } = pageData;
  const { title, links } = navbar;
  const { userContext } = useContext(AppContext);
  const [user, setUser] = userContext;
  const { name, email, photoUrl } = user;

  const handleLogOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser({
          name: "",
          email: "",
          photoUrl: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const loginButton = (
    <Link className="nav-link" to="/login">
      <button type="button" className="btn btn-primary">
        Log In
      </button>
    </Link>
  );
  const logOutButton = (
    <button type="button" className="btn btn-primary" onClick={handleLogOut}>
      Log Out
    </button>
  );

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container ">
          <Link className="navbar-brand" to="/home">
            <div className="d-flex justify-content-center align-items-center">
              <img src={logo} alt="logo" className="header-logo" />
              <h1>{title}</h1>
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between align-items-center"
            id="navbarNavAltMarkup"
          >
            <div></div>
            <div className="navbar-nav align-items-center">
              {links.map((link) => (
                <Link
                  key={link.name}
                  className={`nav-link`}
                  aria-current="page"
                  to={link.link}
                >
                  {link.name}
                </Link>
              ))}
              {user.admin && (
                <Link className={`nav-link`} aria-current="page" to="/admin">
                  Admin
                </Link>
              )}
            </div>
            <div>
              {email &&
                ((
                  <Link to="/profile">
                    <img src={photoUrl} alt={name} className="profile-image" />
                  </Link>
                ) || <h5 className="nav-link active">{name || email}</h5>)}
              {email ? logOutButton : loginButton}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

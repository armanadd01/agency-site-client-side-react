import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <>
            <Nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink className="nav-link active" aria-current="page" href="/">Home</NavLink>
        <NavLink className="nav-link" href="#">Features</NavLink>
        <NavLink className="nav-link" href="#">Pricing</NavLink>
        <NavLink className="nav-link disabled">Disabled</NavLink>
      </div>
    </div>
  </div>
</Nav>
        </>
    );
};

export default Navigation;
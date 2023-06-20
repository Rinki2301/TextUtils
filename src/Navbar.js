import React from "react";
import PropTypes from 'prop-types'

import {

    Link
  } from "react-router-dom";
  
export default function Navbar(props){
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <Link className="navbar-brand " to="/">{props.title}</Link>

  <div className="collapse navbar-collapse" id="navSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item active">
        <Link className="nav-Link" to="/">Home   <span className="sr-only"></span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-Link" to="/about">{props.aboutText}</Link>
      </li>
    </ul>
    {/* <form className="d-flex">
      <input className="form-control me-2 " type="search"  placeholder="Search" aria-label="Search" />
      <button className="btn btn-primary mx-2" type="submit">Search</button>
    </form> */}  
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlfor="flexSwitchCheckDefault">Enable Darkmode</label>
        </div>
  </div>
</nav>
        </div>
    )
}

Navbar.propTypes = {title : PropTypes.string,
aboutText:PropTypes.string,}

Navbar.defaultProps = {
    aboutText:"About"
}
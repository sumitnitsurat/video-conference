import * as React from "react";
import {Navbar} from "react-bootstrap";

const Header = ({children}) => (
    <Navbar className="justify-content-between bg-app" sticky="top" variant="light">
    <Navbar.Brand href="/">
      <img
        alt=""
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      <span style={{color: "#fff", fontWeight: 600}}>Namaste Talk</span>
    </Navbar.Brand>
    {children || null}
  </Navbar>
);

export default Header;
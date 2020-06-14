import * as React from "react";
import {Navbar} from "react-bootstrap";

const Header = ({children}) => (
    <Navbar className="justify-content-between bg-app" expand="lg" sticky="top" variant="light">
    <Navbar.Brand href="/">
      <span style={{color: "#fff", fontWeight: 600}}>Namaste Talk</span>
    </Navbar.Brand>
    {children || null}
  </Navbar>
);

export default Header;
import * as React from "react";
import {Navbar} from "react-bootstrap";

export const HeaderPrimary = () => (
    <Navbar sticky="top" bg="primary" variant="light">
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
  </Navbar>
)
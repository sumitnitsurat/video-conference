import * as React from "react";
import {Navbar} from "react-bootstrap";

export const Footer = () => (
    <Navbar className="justify-content-around" sticky="bottom" bg="dark" variant="dark">
      <span style={{color: "#fff", fontWeight: 600}}>&copy; Namaste Talk 2020</span>
      <span style={{color: "#fff", fontWeight: 600}}>contact/feedback: <a className="text-white" href="mailto:admin@namaste.ind.in">admin@namaste.ind.in</a></span>
  </Navbar>
)
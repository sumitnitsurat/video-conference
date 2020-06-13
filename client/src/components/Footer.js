import * as React from "react";
import {Navbar} from "react-bootstrap";

export const Footer = () => (
    <Navbar className="justify-content-around align-items-center" expand="lg" sticky="bottom" bg="dark" variant="dark">
      <div className="h6" style={{color: "#fff", fontWeight: 600}}>&copy; Namaste Talk 2020</div>
        <div className="mr-3 text-white d-inline-block">
        <span className="h6">Join us on Telegram: </span>
        <a href="https://t.me/joinchat/HT7EphxPod6Qnz2GzzRSKg" target="_blank"><i className="fab fa-telegram-plane h5 text-white ml-2" aria-hidden="true"></i></a>
        </div>
        <span className="h6" style={{color: "#fff", fontWeight: 600}}>Contact: <a className="text-white" href="mailto:admin@namaste.ind.in">admin@namaste.ind.in</a></span>
  </Navbar>
)
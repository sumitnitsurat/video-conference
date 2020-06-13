import React, { useEffect } from 'react';
import './App.css';
import {Home} from "./components/Home";
import {Features} from "./components/Home/Features";
import Header from "./components/HeaderPrimary";
import {Footer} from "./components/Footer";
import {PrivateMeeting} from "./components/Home/PrivateMeeting";
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";

function App(props) {
  let history = useHistory(); 
  return (
    <>
        <Header>
          <Button variant="outline-info" onClick={() => history.push("/private")}>Join Secure Meeting</Button>
        </Header>

        <div className="container mt-5" id='room-create'>
            <div className="col-12 h2 mt-5 text-center">
              <img width="100" src="/assets/logo.png"/>
            </div>
            
            <div className="row mt-2">
                <div className="col-12 col-md-5 mt-5 col-sm-12 mb-3 p-5">
                  <Home/>
                </div>
                <div className="vl col-md-2 d-none d-sm-none d-md-block mt-4 mb-4 offset-md-1"/>
                <div className="col-12 col-md-4 col-sm-12 mt-4">
                  <PrivateMeeting />
                </div>
            </div>
        </div>

        <Features/>

        <div className="container-fluid" id='username-set' hidden>
            <div className="row">
                <div className="col-12 h4 mt-5 text-center">Your Name</div>
            </div>
            
            <div className="row mt-2">
                <div className="col-12 text-center">
                    <span className="form-text small text-danger" id='err-msg-username'></span>
                </div>

                <div className="col-12 col-md-4 offset-md-4 mb-3">
                    <label for="username">Your Name</label>
                    <input type="text" id='username' className="form-control rounded-0" placeholder="Your Name" />
                </div>

                <div className="col-12 col-md-4 offset-md-4 mb-3">
                    <button id='enter-room' className="btn btn-block rounded-0 btn-info">Enter Room</button>
                </div>
            </div>
        </div>
        
        {props.location.pathname === '/' && !props.location.search && <Footer/>}
    </>
  );
}

export default App;

import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import StreamActions from "./components/StreamActions";
import {loadEvents} from "./helpers/events"
import {loadRtc} from "./helpers/rtc";
import {Home} from "./components/Home";
import {HeaderPrimary} from "./components/HeaderPrimary";
import {Footer} from "./components/Footer";

function App() {
  useEffect(() => {
    loadEvents();
    loadRtc();
  }, []);
  return (
    <div className="App">
        <div className="custom-modal" id='recording-options-modal'>
            <div className="custom-modal-content">
                <div className="row text-center">
                    <div className="col-md-6 mb-2">
                        <span className="record-option" id='record-video'>Record video</span>
                    </div>
                    <div className="col-md-6 mb-2">
                        <span className="record-option" id='record-screen'>Record screen</span>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-md-12 text-center">
                        <button className="btn btn-outline-danger" id='closeModal'>Close</button>
                    </div>
                </div>
            </div>
        </div>
        <HeaderPrimary/>

        <div className="container mt-5" id='room-create' hidden>
            <div className="row">
                <div className="col-12 h2 mt-5 text-center">Let`s Talk</div>
            </div>
            
            <div className="mt-2">
                <div className="col-12 col-md-4 offset-md-4 mb-3">
                  <Home/>
                </div>
                <hr class="mt-4 mb-4"/>
                <div className="col-12 text-center">
                    <span className="form-text small text-danger" id='err-msg'></span>
                </div>

                <div className="col-12 col-md-4 offset-md-4 mb-3">
                    <label for="room-name">Room Name</label>
                    <input type="text" id='room-name' className="form-control rounded-0" placeholder="Room Name" />
                </div>

                <div className="col-12 col-md-4 offset-md-4 mb-3">
                    <label for="your-name">Enter As</label>
                    <input type="text" id='your-name' className="form-control rounded-0" placeholder="Your Name" />
                </div>

                <div className="col-12 col-md-4 offset-md-4 mb-3">
                    <button id='create-room' className="btn btn-block rounded-0 btn-info">Create Room</button>
                </div>

                <div className="col-12 col-md-4 offset-md-4 mb-3" id='room-created'></div>
            </div>
        </div>



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


        
        <div className="container-fluid room-comm" hidden>
            <div className="row">
                <video className="local-video mirror-mode" id='local' volume='0' autoPlay muted></video>
            </div>
            
            <div className="row">
                <div className="col-md-12 main" id='main-section'>                    
                    <div className="row mt-2 mb-2" id='videos'></div>
                </div>

                <div className="col-md-3 chat-col d-print-none mb-2 bg-info" id='chat-pane' hidden>
                    <div className="row">
                        <div className="col-12 text-center h2 mb-3">CHAT</div>
                    </div>

                    <div id='chat-messages'></div>

                    <div className="row">
                        <textarea id='chat-input' className="form-control rounded-0 chat-box border-info" rows='3' placeholder="Type here..."></textarea>
                    </div>
                </div>
            </div>
        </div>
        <StreamActions/>
        <Footer/>
    </div>
  );
}

export default App;

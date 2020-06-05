import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
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
        
        
        <nav className="navbar fixed-top bg-info rounded-0 d-print-none">
            <div className="text-white">Talk Desi</div>

            <div className="pull-right room-comm" hidden>
                <button className="btn btn-sm rounded-0 btn-no-effect" id='toggle-video' title="Hide Video">
                    <i className="fa fa-video text-white"></i>
                </button>

                <button className="btn btn-sm rounded-0 btn-no-effect" id='toggle-mute' title="Mute">
                    <i className="fa fa-microphone-alt text-white"></i>
                </button>

                <button className="btn btn-sm rounded-0 btn-no-effect" id='share-screen' title="Share screen">
                    <i className="fa fa-desktop text-white"></i>
                </button>

                <button className="btn btn-sm rounded-0 btn-no-effect" id='record' title="Record">
                    <i className="fa fa-dot-circle text-white"></i>
                </button>

                <button className="btn btn-sm text-white pull-right btn-no-effect" id='toggle-chat-pane'>
                    <i className="fa fa-comment"></i> <span className="badge badge-danger very-small font-weight-lighter" id='new-chat-notification' hidden>New</span>
                </button>

                <button className="btn btn-sm rounded-0 btn-no-effect text-white">
                    <a href="/" className="text-white text-decoration-none"><i className="fa fa-sign-out-alt text-white" title="Leave"></i></a>
                </button>
            </div>
        </nav>

        <div className="container-fluid" id='room-create' hidden>
            <div className="row">
                <div className="col-12 h2 mt-5 text-center">Create Room</div>
            </div>
            
            <div className="row mt-2">
                <div className="col-12 text-center">
                    <span className="form-text small text-danger" id='err-msg'></span>
                </div>

                <div className="col-12 col-md-4 offset-md-4 mb-3">
                    <label for="room-name">Room Name</label>
                    <input type="text" id='room-name' className="form-control rounded-0" placeholder="Room Name" />
                </div>

                <div className="col-12 col-md-4 offset-md-4 mb-3">
                    <label for="your-name">Your Name</label>
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
    </div>
  );
}

export default App;

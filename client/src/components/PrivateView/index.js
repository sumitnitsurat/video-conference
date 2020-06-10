import React, { useState } from 'react';
import Header from "../HeaderPrimary";
import {Footer} from "../Footer";
import Button from 'react-bootstrap/Button';
import {decodeRoom} from "../../services/room";

function PrivateView() {
    const [meetingCode, setMeetingCode] = useState("");
    const [roomName, setRoomName] = useState("");
    const joinMeeting = () => {
        const roomCode = decodeRoom(roomName,  meetingCode);
    }
  return (
    <>
        <Header/>
        <div className="container-fluid" id='username-set'>
            <div className="row mt-5">
                <div className="col-12 col-md-4 offset-md-4 mb-3">
                <p>Enter room name and meeting code shared to you to join the meeting.</p>
                </div>
                <div className="col-12 text-center">
                    <span className="form-text small text-danger" id='err-msg-username'></span>
                </div>

                <div className="col-12 col-md-4 offset-md-4 mb-3">
                    <label for="username">Room Name</label>
                    <input type="text" id='username' onChange={(e) => setRoomName(e.target.value)} className="form-control rounded-0" placeholder="Your Name" />
                </div>

                <div className="col-12 col-md-4 offset-md-4 mb-3">
                    <label for="username">Meeting Code</label>
                    <input type="text" id='username'  onChange={(e) => setMeetingCode(e.target.value)} className="form-control rounded-0" placeholder="Your Name" />
                </div>

                <div className="col-12 col-md-4 offset-md-4 mb-3">
                    <Button variant="primary" size="lg" style={{width: '100%'}} onClick={joinMeeting}>Join Meeting</Button>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  );
}

export default PrivateView;

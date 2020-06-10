import * as React from "react";
import { useEffect } from "react";
import Header from "../HeaderPrimary";
import { loadEvents } from "../../helpers/events"
import { loadRtc } from "../../helpers/rtc";
import StreamActions from "../StreamActions";
import RecodringView from "./Recording";
import Button from "react-bootstrap/Button";

import "./room.css";
import {
    useParams,
    useHistory
  } from "react-router-dom";
const MeetingRoom = () => {
    const {meetingId} = useParams();
    let {push} = useHistory();
    useEffect(() => {
        loadEvents();
        loadRtc(meetingId);
    }, [meetingId]);
    return (
        <>
            <RecodringView />
            <Header>
                <div>
                <Button variant="info" id='record-video'>Record Video</Button>{'  '}
                <Button variant="info" id='record-screen'>Record Screen</Button>{'   '}
                <Button variant="danger" onClick={() => push("/")}>Leave Session</Button>{'  '}
                </div>
            </Header>

            <div className="container-fluid">
                <div className="row">
                    <video className="local-video mirror-mode" id='local' volume='0' autoPlay muted></video>
                </div>

                <div className="row">
                    <div className="col-md-12 main" id='main-section'>
                        <div className="row mt-2 mb-2" id='videos'></div>
                    </div>

                    <div className="col-md-3 chat-col d-print-none mb-2 bg-app" id='chat-pane' hidden>
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
            <StreamActions />
        </>);
}

export default MeetingRoom;
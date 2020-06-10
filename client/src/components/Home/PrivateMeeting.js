import * as React from "react";
import {createPrivateRoom} from "../../services/room";
import Button from 'react-bootstrap/Button';

export const PrivateMeeting = () => {
    const [roomName, setRoomName] = React.useState("");
    const [userName, setUserName] = React.useState("");
    const [code, setCode] = React.useState(undefined);
    const makeRoom = (e) => {
        e.preventDefault();
        const code = createPrivateRoom(roomName);
        console.log("makign room", roomName, userName,code)
        setCode(code);
    }
    let roomLink = `${ window.location.origin }/private/${roomName}/${code} }`;

    return (
        <>
            <p>Create secure meeting to talk with your family, friends and collegues.</p>
            <div className="text-center">
                    <span className="form-text small text-danger" id='err-msg'></span>
                </div>

                <div className="mb-3">
                    <label for="room-name">Room Name</label>
                    <input type="text" onChange={(e) => setRoomName(e.target.value)} className="form-control rounded-0" placeholder="Room Name" />
                </div>

                <div className="mb-3">
                    <label for="your-name">Enter As</label>
                    <input type="text" onChange={(e) => setUserName(e.target.value)} className="form-control rounded-0" placeholder="Your Name" />
                </div>
                <div className="mb-3">
                    <Button variant="primary" size="lg" style={{width: '100%'}} onClick={makeRoom}>
                        Create Secure Session
                    </Button>
                </div>
            
            { !!roomName && !!code && <div className="mt-2 text-center">
                
                <p>Hello {userName} !!! Click <a href={roomLink}>
                    here
                </a> to enter the room.</p> 
                <p>Share <b>Room Name:</b> {roomName} and <b>Code:</b>{code} with your collegues and friends to interact.</p>
            </div>}
        </>
    )

}
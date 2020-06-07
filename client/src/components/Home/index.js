import * as React from "react";
import {createRoom} from "../../services/room";
import Button from 'react-bootstrap/Button';

export const Home = () => {
    const [roomLink, setRoomLink] = React.useState("");
    const makeRoom = (e) => {
        e.preventDefault();
        const room = createRoom();
        setRoomLink(room);
    }
    return (
        <>

            <Button variant="primary" size="lg" style={{width: '100%'}} onClick={makeRoom}>
                Create New Session
            </Button>
            { roomLink && <div className="mt-2">
                Click <a href={roomLink}>
                    here
                </a> to enter the room. Share {roomLink} with your collegues and friends to interact.
            </div>}
        </>
    )

}
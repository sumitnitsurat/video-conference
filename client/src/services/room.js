import Hashids from 'hashids'

const generateRandomString = () => {
    return Math.random().toString( 16 ).slice( 2 ).substring( 0, 8);
}
export const createRoom = () => {
    let roomName = generateRandomString();
    let yourName = 'Anonymous';
    //save the user's name in sessionStorage
    sessionStorage.setItem( 'username', yourName );

    //create room link
    let roomLink = `${ window.location.origin }/${ roomName.trim().replace( ' ', '_' ) }_${ generateRandomString() }`;

    return roomLink;
};


export const createPrivateRoom = (roomName, userName= 'Anonymous') => {
    try {
        let room = `${generateRandomString().trim().replace( ' ', '_' ) }${ generateRandomString()}`;
        //save the user's name in sessionStorage
        sessionStorage.setItem( 'username', userName );
        console.log(room, "room")
        //create room link
        const hashId = new Hashids(roomName);
        console.log(hashId)
        const code = hashId.encodeHex(room);
        console.log(code)
        return code;
    } catch (e) {
        console.log("in erorr", e);
    }
}

export const decodeRoom = (roomName, code) => {
    console.log(roomName, code);
    const hashId = new Hashids(roomName);
    const roomCode = hashId.decodeHex(code);
    console.log(roomCode, "roomcod")
    return roomCode;
}
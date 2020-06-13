let express = require( 'express' );
let app = express();
let server = require( 'http' ).Server( app );
let io = require( 'socket.io' )( server );
let stream = require( './ws/stream' );
let path = require( 'path' );
let favicon = require( 'serve-favicon' );

app.use( favicon( path.join( __dirname, 'favicon.ico' ) ) );
app.use( '/static', express.static( path.join( __dirname, '/build/static' ) ) );

app.get( '*', ( req, res ) => {
    res.sendFile( __dirname + '/build/index.html' );
} );

io.of( '/stream' ).on( 'connection', stream );

server.listen( 5000 );

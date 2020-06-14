let express = require( 'express' );
let app = express();
let server = require( 'http' ).Server( app );
let io = require( 'socket.io' )( server );
let stream = require( './ws/stream' );
// let path = require( 'path' );
// let favicon = require( 'serve-favicon' );
var corsOptions = {
    origin: 'https://namaste.ind.in',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
var cors = require('cors')
// app.use( favicon( path.join( __dirname, '/build/favicon.ico' ) ) );
// app.use( '/static', express.static( path.join( __dirname, '/build/static' ) ) );
// app.use( '/assets', express.static( path.join( __dirname, '/build' ) ) );

// app.get( '*', ( req, res ) => {
//     res.sendFile( __dirname + '/build/index.html' );
// } );
app.use(cors(corsOptions))
io.of( '/stream' ).on( 'connection', stream );

server.listen( 5000 );

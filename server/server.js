const express = require('express')
const bodyParser = require('body-parser')
const Pusher = require('pusher');
require('dotenv').config()

// create a express application
const app = express();

// initialize pusher
let pusher = new Pusher({
	appId: process.env.REACT_APP_PUSHER_APP_ID,
	key: process.env.REACT_APP_PUSHER_KEY,
	secret: process.env.REACT_APP_PUSHER_SECRET,
	cluster: process.env.REACT_APP_PUSHER_CLUSTER,
	useTLS: true
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// to Allow CORS
app.use((req, res, next) => {
		res.header('Access-Control-Allow-Origin', '*');
		res.header(
				'Access-Control-Allow-Headers',
				'Origin, X-Requested-With, Content-Type, Accept'
		);
		next();
});

app.post('/pusher/auth', (req, res) => {
	let socketId = req.body.socket_id;
	let channel = req.body.channel_name;
	let presenceData = {
			user_id: process.env.REACT_APP_USERNAME,
			user_info: {
					username: '@' + process.env.REACT_APP_USERNAME,
			}
	};
	let auth = pusher.authenticate(socketId, channel, presenceData);
	res.send(auth);
});

app.post('/update-location', (req, res) => {
	// trigger a new post event via pusher
	pusher.trigger('presence-channel', 'location-update', {
			'username': req.body.username,
			'location': req.body.location
	})
	res.json({ 'status': 200 });
});

let port = 3128;
app.listen(port);
console.log('listening');
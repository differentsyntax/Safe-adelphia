# Safe-adelphia

Web app for a group of ***alelphoi***-like-friends in Philly to check in on each other's locations. The app also keeps track of your own location in real-time and notifies you if you enter an unsafe part of town. Built out of care for my pals using React, Axios, Pusher and Google Maps.

## Setup

Clone the repository and install dependencies by using the following command from the cloned directory:

```bash
npm install
```
[Create an account](https://dashboard.pusher.com/accounts/sign_up) at Pusher, then create a Channels app. Go to the "Keys" page for that app, and make a note of your app_id, key, secret and cluster. A [Google Maps API key](https://developers.google.com/maps/documentation/javascript/get-api-key) will also be required.
Dump the above keys into a .env file in the following format:
```text
REACT_APP_PUSHER_CLUSTER=<>
REACT_APP_GMAPS_KEY=<>
REACT_APP_PUSHER_KEY=<>
REACT_APP_PUSHER_APP_ID=<>
REACT_APP_PUSHER_SECRET=<>
REACT_APP_USERNAME=<your name / alias>
``` 
Save a copy of the above .env file in both the cloned repository root and the server directory. 

Run the app on localhost using the following command from the project root directory:

```bash
npm start
```
Also run the backend server by using the following command from the server directory:

```bash
node server.js
```
## Features

* Shows the live location and names of friends on the map who are using the app and have subscribed to the same Pusher channel
* On-screen notification when a friend enters and starts sharing the location or exits their app and stops sharing the location
* Slack message / email / On-screen notification (as set) as soon as the user enters a shady/unsafe area of the city 

## In Progress

* Getting factual and authentic heat map of crime in Philadelphia and setting unsafe area coordinates accordingly

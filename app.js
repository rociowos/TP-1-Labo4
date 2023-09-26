require('dotenv').config();
<<<<<<< HEAD
const express = require('express');
const app = express();
const Server = require('./models/server');
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

const svr = new Server();
svr.listen();
=======

const Server = require('./models/server');

const svr = new Server(); 
svr.listen();
>>>>>>> f7e13924a5e06f9e8985663427150a8983c5525f

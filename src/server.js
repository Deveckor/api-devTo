const express = require('express');
const users = require('./routers/users');



const server = express();

server.use(express.json())
server.use('/users', users);


module.exports = server;
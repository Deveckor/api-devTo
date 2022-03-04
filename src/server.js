const express = require('express');
const users = require('./routers/users');
const post = require('./routers/post');
const writer = require('./routers/writer');


const server = express();

server.use(express.json())
server.use('/users', users);
server.use('/post', post);
server.use('/writer',writer);

module.exports = server;
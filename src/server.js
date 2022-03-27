const express = require('express');
const cors = require('cors');
const post = require('./routers/post');
const writer = require('./routers/writer');


const server = express();

server.use(express.json())
server.use(cors())
server.get('/', function(req, res) {
    res.render('get')
    res.end();
})
server.use('/post', post);
server.use('/writer',writer);

module.exports = server;
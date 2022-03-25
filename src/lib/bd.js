const mg = require('mongoose');

const DB_USER = 'deveckor';
const DB_PASSWORD = '15121987roenma';
const DB_HOST = 'devtoproyect.1fyom.mongodb.net';
const DB_NAME = 'devTo';

const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;


const connect = () =>{
    return mg.connect(URL);
}

module.exports = connect;
const Writed = require('../models/writers');
const User = require('../models/users');

const getAll = ()=>{
    return Writed.find({})
}

const createWriter = (dataWriter)=>{
    
    const{avatar, bio, nationality, name} = dataWriter;
    return Writed.create(dataWriter)
}

module.exports = {
    getAll,
    createWriter
}
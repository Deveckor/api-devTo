const mg = require('mongoose');


const writerSchema = new mg.Schema({
    
    avatar:{
        type: String,
        required: false,
    },
    bio:{
        type: String,
        required: true,
        minLength: 10,
        maxLength: 255
    },
    nationality:{
        type: String,
        required: true,
        maxLength: 3
    },
    name:{
        type: String,
        required: true,
        minLength: 3,
        maxLength: 10
    },
    email:{

    }
   
});

const model = mg.model('writers', writerSchema);

module.exports = model;
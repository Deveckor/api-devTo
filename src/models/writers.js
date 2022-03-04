const mg = require('mongoose');

const writerSchema = new Schema({
    name: {
        type: 'string',
        required: true,
        minLength: 2,
        maxLength: 25,
        trim: true
    },
    avatar:{
        type: 'string',
        required: false,
    },
    bio:{
        type: 'string',
        required: true,
        minLength: 10,
        maxLength: 255
    },
    nationality:{
        type: 'string',
        required: true,
        maxLength: 3
    },
    user:[{type: mg.Types.ObjectId, ref: 'user'}]
   
});

const model = mg.model('writers', writerSchema);

module.exports = model;
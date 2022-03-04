const mg = require('mongoose');

const  userSchema = new mg.Schema({
    name:{
        type: 'string',
        required: true,
        trim: true,
        minLength: 2,
        maxLength: 30
    },
    email: {
        type: 'string',
        required: true,
        match: /.+@.+\..+/
    },
    password: {
        type: 'string',
        required: true,
    }
})

const model = mg.model('users', userSchema);

module.exports = model
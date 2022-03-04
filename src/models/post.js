const mg = require('mongoose');
const Writer = require('./writers');

const postSchema = new mg.Schema({
    author: [{type: mg.Types.ObjectId, ref: 'Writer'}],
    article:{
        type: 'string',
        minLength: 25,
        maxLength: 255,
        required: true
    },
    timestamp: true,
    reaction:{
        type: 'number'
    },
    comment:[{
        author: [{type: mg.Types.ObjectId, ref: 'Writer'}],
        content: 'string'
    }]

})

const model = mg.model('post', postSchema);

module.exports = model;
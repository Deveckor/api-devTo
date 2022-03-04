const mg = require('mongoose');


const postSchema = new mg.Schema({
    author: [{type: mg.Types.ObjectId, ref: 'writers'}],
    title:{

    },
    image: {
        type: String,
    },
    article:{
        type: String,
        minLength: 25,
        maxLength: 255,
        required: true
    },
    tags:[{
        type: String,
    }],
    reaction:{
        type: Number,
    },
    comment:[{
        author: [{type: mg.Types.ObjectId, ref: 'writers'}],
        content: 'string'
    }],
    
    
},
{
    timestamp: true
})

const model = mg.model('post', postSchema);

module.exports = model;
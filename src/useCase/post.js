const Post = require('../models/post');

const getAll = ()=>{
    return Post.find({})
}
const createPost = (dataPost) =>{
    const {author, article, reaction, comment} = dataPost;
    return Post.create(dataPost);
}


module.exports = {
    createPost,
    getAll
}
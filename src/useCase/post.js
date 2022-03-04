const Post = require('../models/post');

const getAll = ()=>{
    const dataPost = await 
}
const createPost = (dataPost) =>{
    const {author, article,reaction, comment} = dataPost;
    return Post.create(dataPost);
}


module.exports = {
    createPost,
    getAll
}
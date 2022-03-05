const Post = require('../models/post');

 async function validation(req, res, next) {
     try {
         const idPost = req.params.id;
         const post = await Post.findById(idPost)
         
         req.idAuthor = post
         next()
         
     } catch (error) {
         console.log(error);
     }
}

module.exports = validation;
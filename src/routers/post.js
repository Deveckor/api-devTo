const express = require('express');
const useCasePost = require('../useCase/post');
const auth = require('../middleware/auth');
const validation = require('../middleware/validation');


const router = express.Router();

router.use(auth)

router.get('/', async (req, res) => {
    try {
        const allPost = await useCasePost.getAll()
        
        res.json({
            success:true,
            message: 'All post', 
            data:{
                post: allPost
            }
        })
    } catch (error) {
        res.status(400)
        res.json({
            success:false,
            error: error.message,
            message: 'Post not found'
        })
    }
})
router.get('/writer/:id', async (req, res) => {
    try {
        const idWriter = req.params.id;
        const getPost = await useCasePost.getForIdWriter(idWriter);
        res.json({
            success:true,
            message: 'get post for writer', 
            data:{
                post: getPost
            }
        })

    } catch (error) {
        res.status(400)
        res.json({
            success:false,
            error: error.message,
            message: 'Post not found'
        })
    }
})
router.get('/:id', async (req, res) => {
    try {
        const idPost = req.params.id;
        const post = await useCasePost.getForId(idPost);
        
        res.json({
            success:true,
            message: 'get post', 
            data:{
                post: post
            }
        })
    } catch (error) {
        res.status(400)
        res.json({
            success:false,
            error: error.message,
            message: 'Post not found'
        })
    }


})
router.post('/', async (req, res) => {
    try {
        const postData = req.body;
        const author = req.writerCurrent;
        

        const post = await useCasePost.createPost({...postData, author: author});

        res.json({
            success: true,
            message: 'Created Post',
            data:{
                data: post
            }
        })
    } catch (error) {
        res.status(400);
        res.json({
            success: false,
            message: 'Error to create post',
            error: error.message
        })
    }
})
router.patch('/reaction/:id', async (req, res) => {
    try {
        const postReaction = req.body;
        const idPost = req.params.id;

        const post = await useCasePost.updateReaction(idPost, postReaction);

        res.json({
            success: true,
            message: 'reaction +1',
            data:{
                data: post
            }
        })
    } catch (error) {
        res.status(400);
        res.json({
            success: false,
            message: 'Error to reaction',
            error: error.message
        })
    }
})

router.patch('/:id',validation, async (req, res) => {
    try {
        const postData = req.body;
        const idPost = req.params.id;
        const idAuthor = req.idAuthor.author._id;
        
        
        const idNow = req.writerCurrent;
        const updatePost = await useCasePost.updatePost(idPost, postData,idNow, idAuthor);

        res.json({
            success: true,
            message: 'Updated Post',
            data:{
                updatePost: updatePost
            }
        })
    } catch (error) {
        res.status(400);
        res.json({
            success: false,
            message: 'Error to update post',
            error: error.message

        })
    }
})

router.delete('/:id',validation, async (req, res) => {
    try {
        const idPost = req.params.id;
        const idNow = req.writerCurrent;
        const idAuthor = req.idAuthor.author._id;
        const deletePost = await useCasePost.deletePost(idPost, idNow, idAuthor);
        res.json({
            success: true,
            message: 'delete Post',
            data:{
                deletePost: deletePost
            }
        })
    } catch (error) {
        res.status(400);
        res.json({
            success: false,
            message: 'Error to delete post',
            error: error.message

        })
    }
})

router.post('/comment/:id', async (req, res) => {

    try {
        const idPost = req.params.id;
        const comment = req.body;
        const author = req.writerCurrent;
        
        const create = await useCasePost.createComment(idPost,{...comment,name: author});

        res.json({
            success: true,
            message: 'create comment',
            data:{
                data: create
            }
        })
    } catch (error) {
        res.status(400);
        console.log(error);
        res.json({
            success: false,
            message: 'Error to create comment',
            error: error.message

        })
    }
})

module.exports = router;
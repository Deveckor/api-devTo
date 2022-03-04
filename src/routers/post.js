const express = require('express');
const useCasePost = require('../useCase/post');
const auth = require('../middleware/auth');

const router = express.Router();

router.use(postDev);

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


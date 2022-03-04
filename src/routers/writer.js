const express = require('express');
const useCaseWriter = require('../useCase/writers');
const auth = require('../middleware/auth');

const router = express.Router();

router.use(auth);

router.get('/', async (req, res)=>{
    try {
        const allWrited = await useCaseWriter.getAll()

        res.json({
            success:true,
            message: 'All Writer', 
            data:{
                post: allWrited
            }
        })
    } catch (error) {
        res.status(400)
        res.json({
            success:false,
            error: error.message,
            message: 'Writer not found'
        })
    }
})

router.post('/', async (req, res) => {
    try {
        const writerData = req.body;
        
        const writer = await useCaseWriter.createWriter(writerData);

        res.json({
            success: true,
            message: 'Created Writer',
            data:{
                data: writer
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
module.exports = router;
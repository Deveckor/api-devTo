const express = require('express');
const useCaseWriter = require('../useCase/writers');


const router = express.Router();



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

router.post('/singup', async (req, res) => {
    try {
        const writerData = req.body;
        const writerCreated = await users.singUp(writerData);
        
        
        res.json({
            success: true,
            message: 'create writer'
        })
    } catch (error) {
        res.json({
            message: 'error',
            success: false
        })
    }

})
router.post('/login',async (req, res) => {
    try {
        const {email, password} = req.body;
        const token = await writer.login(email, password)
        
        res.json({
            success: true,
            message: 'Writer logged In',
            data:{
                token
            }
        })


    } catch (error) {
        res.status(400)
        res.json({
            success: false,
            message: 'Could not register',
            error: error.message
        })
    }
})
module.exports = router;
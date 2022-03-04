const express = require('express');
const users = require('../useCase/users');

const router = express.Router()

router.post('/singup', async (req, res) => {
    try {
        const userData = req.body;
        console.log(userData);const userCreated = await users.singUp(userData);
        
        
        res.json({
            success: true,
            message: 'create user'
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
        const token = await users.login(email, password)

        res.json({
            success: true,
            message: 'User logged In',
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
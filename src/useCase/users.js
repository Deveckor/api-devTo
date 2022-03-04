const User = require('../models/users');
const cryp = require('../lib/bcrypt');
const jwt = require('../lib/jwt');

async function getAll(){
    const users = await User.find({})
}

async function singUp(dataUser){
    const {email, password, name} = dataUser
    const userFound = await User.findOne({email: email})

    if (userFound) throw new Error('User already exists')
    
    const passwordEncrypt = await cryp.hash(password)
    return User.create({name, email, password: passwordEncrypt})
}
async function login(email, password){

    const userFound = await User.findOne({email});

    if (!userFound) throw new Error('Invalid credentials')

    const isValidPassword = await cryp.compare(password, userFound.password)

    if(!isValidPassword) throw new Error('Invalid credentials');
    
    return jwt.sign({id: userFound.id})
    
    
}

module.exports = {
    getAll,
    singUp,
    login
}
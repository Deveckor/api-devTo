const Writer = require('../models/writers');
const cryp = require('../lib/bcrypt');
const jwt = require('../lib/jwt');

const getAll = ()=>{
    return Writer.find({})
}


async function singUp(dataWriter) {
    const {email, password, name} = dataWriter
    const writerFound = await Writer.findOne({email: email})

    if (userFound) throw new Error('User already exists')
    
    const passwordEncrypt = await cryp.hash(password)
    return Writer.create({name, email, password: passwordEncrypt})
}
async function login(email, password){

    const writerFound = await Writer.findOne({email: email});

    if (!writerFound) throw new Error('Invalid credentials')

    const isValidPassword = await cryp.compare(password, writerFound.password)

    if(!isValidPassword) throw new Error('Invalid credentials');

    return jwt.sign({id: writerFound.id})
    
    
}
module.exports = {
    getAll,
    singUp,
    login
}
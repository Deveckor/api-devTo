const server = require('./src/server');
const dbConnect = require('./src/lib/bd');
// const req = require('express/lib/request');
const PORT = process.env.PORT || 3000;





const connect = async () =>{
    try {
        await dbConnect();
        console.log('Database connected :D');
        server.listen(PORT, ()=>{
            console.log(`Server running on port ${PORT}`);
        });
    } catch (err) {
        console.log(`Error: ${err}`);
    }
}

connect();
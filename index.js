const server = require('./src/server');
const dbConnect = require('./src/lib/bd');
const port = 8080;

const connect = async () =>{
    try {
        await dbConnect();
        console.log('Database connected :D');
        server.listen(port, ()=>{
            console.log(`Server running on port ${port}`);
        });
    } catch (err) {
        console.log(`Error: ${err}`);
    }
}

connect();
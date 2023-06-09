require('dotenv').config();
const {  Pool } = require('pg')
const config = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE

}

const pool = new Pool(config);
const dbconnect = async () => { 
    const poolConnect = pool.connect();
    if(poolConnect) {
        console.log('successful connection');
    }else {
        console.log('connection problem ')
    }

}



module.exports = { dbconnect,pool};

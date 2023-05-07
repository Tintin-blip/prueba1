const express = require('express')
const cors = require('cors');
const morgan = require('morgan');


class Server { 
    constructor() { 
        this.app = express();
        this.router();
        
        this.middlewares();
    };
    middlewares() { 
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
    }
    router() {
        this.app.use( '/',require('../Express/router'));
    };

    listen() { 
        this.app.listen(8000, ()=> {
            console.log('run');
        });
    };
};
module.exports = Server;
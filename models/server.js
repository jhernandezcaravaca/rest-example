const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();

        //Middlewares
        this.middlewares();
        //Rutas
        this.routes();
        this.port = process.env.PORT;
    }

    middlewares(){
        //CORS -> Sirve para restringir de que url aceptamos peticiones REST
        this.app.use(cors());
        
        //Lectura y parseo del body de json
        this.app.use(express.json());

        //Directorio publico
        this.app.use(express.static('public'));
    }

    routes() {
        //Rutas de la aplicacion
       this.app.use('/api/user', require('../routes/user.routes'));

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto: ${this.port}`);
        });
    }

}

module.exports = Server;
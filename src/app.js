import express from 'express'
import { version } from 'mongoose';
import morgan from 'morgan' //midleware
import pkg from '../package.json'

const app = express();

//Guarda en una variable el archivo package.json que importe
app.set('pkg',pkg);

//cada vez que visiten la pagina vere en el log de la terminal las peticiones realizadas
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.json({
        Nombre_del_proyecto: app.get('pkg').name,
        Autor: app.get('pkg').author,
        Descripcion: app.get('pkg').description,
        Version: app.get('pkg').version
    })
})

export default app;
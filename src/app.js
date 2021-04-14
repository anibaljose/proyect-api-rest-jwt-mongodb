import express from 'express'
import { version } from 'mongoose';
import morgan from 'morgan' //midleware
import pkg from '../package.json'
import productRoute from './routes/product.routes'

const app = express();

//Guarda en una variable el archivo package.json que importe
app.set('pkg',pkg);

//cada vez que visiten la pagina vere en el log de la terminal las peticiones realizadas
app.use(morgan('dev'));
//con esto le decimos que puede interpretar los request que vienen en json
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        Nombre_del_proyecto: app.get('pkg').name,
        Autor: app.get('pkg').author,
        Descripcion: app.get('pkg').description,
        Version: app.get('pkg').version
    })
})

app.use('/products', productRoute)

export default app;
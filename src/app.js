import express from 'express'
import { version } from 'mongoose';
import morgan from 'morgan' //midleware
import pkg from '../package.json'
import productRoute from './routes/product.routes'
import authRoute from './routes/auth.routes'
import userRoutes from './routes/user.routes'

import {createRols} from './libs/initialSetup'

const app = express();
createRols();

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

app.use('/api/products', productRoute)
app.use('/api/auth', authRoute)
app.use('/api/users', userRoutes)

export default app;
import mongose from 'mongoose'

mongose.connect("mongodb://localhost:27017/companyDB",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Db is connected'))
    .catch(error => console.log(error))
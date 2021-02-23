const logger = (log) => { console.log(new Date, log) }
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
​
logger('libreria mongoose obtenida');
​
const MONGO_HOST = process.env.MONGO_HOST || 'localhost';
const MONGO_PORT = process.env.MONGO_PORT || '27017';
const MONGO_DBNAME = process.env.MONGO_DBNAME || 'practicas';
const MONGO_USER = process.env.MONGO_USER || null;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || null;
​
const QUERY_STRING = MONGO_USER ? 
`mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DBNAME}`:
`mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DBNAME}`
​
logger('estableciendo conexion con la base de datos');
logger(QUERY_STRING);
mongoose.connect(QUERY_STRING, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    logger('conexion establecida');
}).catch(error => {
    console.log(error.message);
})
​
const countryCollection = require('./countryCollection.json');
​
const Country = mongoose.model('Country',{nombre:'String',name:'String',nom:'String',iso2:'String',iso3:'String',phone_code:'String'});
​
Country.insertMany(countryCollection);
​


new Promise();

class MiClase extends Promise{

    limit(){
        
    }
}






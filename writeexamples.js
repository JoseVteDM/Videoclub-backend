logger = (log) => (console.log(new Date .log));
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

logger("libreria mongoose requerida", mongoose);


const MONGO_HOST = process.env.MONGO_HOST || 'localhost';
const MONGO_PORT = process.env.MONGO_PORT || '27017';
const MONGO_DBNAME = process.env.MONGO_DBNAME || 'practicas';
const MONGO_USER = process.env.MONGO_USER || null;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || null;

const QUERY_STRING = MONGO_USER ? 
`mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DBNAME}`:
`mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DBNAME}`


logger("estableciendo conexion con la base de datos");

mongoose.connect(QUERY_STRING, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() =>{
  logger('conexion establecida')
}).catch(error);{
  console.log(error.message);
}


logger('creando esquema de pets')
let petSchema = mongoose.Schema({
  
      id:{
        type: ObjectId,
        
      },
  
      name: {
        type : String,
        required: true,
        default: 'pepe'
      },

      creationDate: {
        type: Date,
        default: new Date
      },

      breed: {
        type: String
      },
  
      sterilized:{
        type: Boolean,
        default:false
      }
  })

  logger('esquema de pets creado');

/////////////////////////////////
logger('creando modelo cat segun esquema pet')
const Cat = mongoose.model('Cat',petSchema);
logger('modelo Cat creado')


logger('creando modelo dog segun esquema pet')
const Dog = mongoose.model('Dog',petScheme);
logger('modelo dog creado')



logger('creando una instancia de cat')
const kitty = new Cat({name:'Zildjian'});
logger('instancia de cat creada')



logger('salvando una instancia de cat');
kitty.save()
.then (()  => logger('instancia de cat salvada'));
.catch( (error) => console.log(error);














/*const logger = (log) => (console.log(new Date .log))
const mongoose = require('mongoose');

logger("libreria mongoose requerida", mongoose);

const MONGO_HOST = process.env.MONGO_HOST || 'localhost';
const MONGO_PORT = process.env.MONGO_PORT || '27017';
const MONGO_DBNAME = process.env.MONGO_DBNAME ||'practicas';
const MONGO_USER = process.env.MONGO_USER || null;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || null;

const QUERY_STRING = MONGO_USER ?
`mongodb://${MONGO_USER}:${MONGO_PASSWORD}:@${MONGO_HOST}localhost:27017/test`



mongoose.connect('mongodb://localhost:27017/test',{useNewUrlParser: true, useUnifiedTipology: true});//Esto es un copia pega



/*logger("hola mundo");

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){ })


const kittySchema = new mongoose.Schema({
    name: String })

const Kitten = mongoose.model('Kitten', kittySchema);


const silence = new Kitten({ name: 'Silence' });
console.log(silence.name); 

kittySchema.methods.speak = function () {
    const greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    console.log(greeting);
  }
  
  const Kitten = mongoose.model('Kitten', kittySchema);



const fluffy = new Kitten({ name: 'fluffy' });
fluffy.speak();



Kitten.find(function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
  })

  Kitten.find({ name: /^fluff/ }, callback);

  */

const mongoose = require('mongoose');
const Country = require('./countryCollection.json')

let Schema = {nombre:'String',name:'String',nom:'String',iso2:'String',iso3:'String',phone_code:'String'});


const Country = mongoose.model('Country', schema);



module.exports=Country;

version: '2'
​
services:      
  mongo:
      container_name: mongo
      image: mongo:latest
      ports:
          - 27017:27017
      # environment:
      #     - MONGO_DATA_DIR=/data/db
      #     - MONGO_LOG_DIR=/dev/null
      # volumes:
      #     - ./data/mongo:/data/db    
​
  mongoexpress:
          image: mongo-express
          depends_on:
              - "mongo"
          links:
              - "mongo"
          ports:
              - 8081:8081  
          environment: 
              ME_CONFIG_MONGODB_SERVER: mongo
              ME_CONFIG_OPTIONS_EDITORTHEME: ambiance
  mongoku:
        image: huggingface/mongoku
        depends_on:
            - "mongo"
        links:
            - "mongo"
        ports:
            - 3100:3100  
        environment: 
            MONGOKU_DEFAULT_HOST: mongo
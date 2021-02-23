const user = require('../models/user');


class Film {

    constructor(){

    }

    //GET - Return all Films in the DB

    async findAllFilms(){
        return user.find();
    };

    //GET - Return a Film with specified ID

    async findById(id) {
        return user.findById(id);
    };

     //GET - Return a Film with specified Title

     async findByTitle({query}) {
        console.log(query)
        if(query == undefined)
        return []
        else
        return user.find({"title": query});
    };


    //POST - Insert a new Film in the DB

    async addFilm(film){
       return user.create(film)
    };

    //PUT - Update a Film already exists

    async updateFilm(id,film){
        return user.findByIdAndUpdate(id,film,{new: true})
    };

    //DELETE - Delete a Film with specified ID

    async deleteFilm(id) {
        return user.findByIdAndRemove(id)
    };
};

let userController = new Film();
module.exports = userController;
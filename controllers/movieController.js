const Storage = require('../storage');

class movies {

    storage;

    constructor() {
        this.storage = new Storage();
    }

    async indexAll() {
        return this.storage.get();
    }

    async store(movies) {
        return this.storage.set(movies);
    }

    async update(id, movies) {    
        return this.storage.updateById(id,movies);
    }

    async destroy(id) {
        return this.storage.deleteById(id);
    }



}


let moviesController = new movies();
module.exports = moviesController;
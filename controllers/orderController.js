const Storage = require('../storage');

class order {

    storage;

    constructor() {
        this.storage = new Storage();
    }

    async indexAll() {
        return this.storage.get();
    }

    async store(order) {
        return this.storage.set(order);
    }

    async update(id, order) {    
        return this.storage.updateById(id,order);
    }

    async destroy(id) {
        return this.storage.deleteById(id);
    }



}


let orderController = new order();
module.exports = orderController;
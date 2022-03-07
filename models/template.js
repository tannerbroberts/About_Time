// This file connects to the mongoDB database in the cloud
const getDb = require('../util/database').getDb;

class Template {
    constructor(owner, name) {
        this.owner = owner;
        this.name = name;

        this.save();
    }

    save() {
        let db = getDb;
        db.collection('templates').insertOne(this)
        .then(result => {
            console.log(result);
        })
        .catch(err => {
            console.log(err);
        });
    }
}

module.exports = Template;
const mongoose = require('mongoose')

async function connectTOMongoDB() {
    try{
        await mongoose.connect('URI');//Paste your URL of Mongo DB connection.
        console.log('Mongo Connected Successfully!!!!');
    }
    catch(err){
        console.log(err.message);
    }
}

module.exports = {
    connectTOMongoDB
};

//ziyCsBhkttzMk218

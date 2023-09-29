const mongoose = require('mongoose')

async function connectTOMongoDB() {
    try{
        await mongoose.connect('mongodb+srv://devansh00990:ziyCsBhkttzMk218@cluster0.pi1ay4p.mongodb.net/?retryWrites=true&w=majority');
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
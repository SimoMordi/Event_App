// connect mongoose to DB

const mongoose = require('mongoose');

let connectionString = `mongodb+srv://SimoMordi:${process.env.MONGO_PASS}@cluster0.484d4pn.mongodb.net/EventApp?retryWrites=true&w=majority`





mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


// log when connected

mongoose.connection.once('open', ()=> {
    console.log('connected to DATABASE');
});

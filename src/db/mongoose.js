const mongoose = require('mongoose')
const  url  =  "mongodb://localhost:27017/telemetery";
const  connect  =  mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
},function(error){
    if (error){
        console.log('Failed to connect to Database');
    }
    else
        console.log('Succesfully Connected to Database');
});
module.exports  =  connect;

const express = require('express')  //importing express
const app = express();  //creating an instance of express
const port = 8000;  //setting up the port
const db = require('./config/mongoose')  //importing the mongoose config file

// Setting up the parser
app.use(express.urlencoded({
    extended: true
}));

//sending all requests to to the index router
app.use('/', require('./routes/index'));


//Fire up the server
app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
        return;
    }
    console.log(`Server is running on port ${port}`);
});
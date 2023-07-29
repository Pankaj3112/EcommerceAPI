//require library
const mongoose = require('mongoose');

//connect to database
async function main() {
    //connecting to my atlas DB
    const db = await mongoose.connect('mongodb+srv://pankaj3112:udPAnOOdZKwZxo5w@cluster0.lm6iyo2.mongodb.net/?retryWrites=true&w=majority');

    //you can connect to your local db like this
    // const db = await mongoose.connect('mongodb://127.0.0.1:27017/yourDBname');
    
    module.exports = db;
}

main()
.then(() => console.log('MongoDB Connected...')) //if connected
.catch(err => console.log(err)); //if error

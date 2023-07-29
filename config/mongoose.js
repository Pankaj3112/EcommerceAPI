//require library
const mongoose = require('mongoose');

//connect to database
async function main() {
    const db = await mongoose.connect('mongodb+srv://pankaj3112:udPAnOOdZKwZxo5w@cluster0.lm6iyo2.mongodb.net/?retryWrites=true&w=majority');
    module.exports = db;
}

main()
.then(() => console.log('MongoDB Connected...')) //if connected
.catch(err => console.log(err)); //if error

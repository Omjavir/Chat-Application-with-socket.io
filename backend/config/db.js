const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        const conn = await mongoose.connect('mongodb://localhost:27017/Messenger', {
            useNewUrlParser: true, useUnifiedTopology: true
        })
        console.log(`Connected Successfully : ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit()
    }
}

module.exports = connectDb;
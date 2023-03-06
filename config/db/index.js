const mongoose = require('mongoose')
async function connect() {
    try {
       await mongoose.connect('mongodb://127.0.0.1/f8_doanvandao_db', {
            useNewUrlParser: true,
            useNewUnifiedTopology: true
        });
        console.log("connect successfully")
    } catch (error) {
        console.log("no connect successfully")
    }
}
module.exports = { connect};
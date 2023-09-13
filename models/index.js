const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017"; 


function main() {
    mongoose.connect(uri).then(() => {
        console.log("MongoDB Connected Successfully ...")
    
    }).catch((err) => {
        console.log("Error: ", err)
    })
}

module.exports = { main };

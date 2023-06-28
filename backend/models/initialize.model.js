const mongoose = require("mongoose");

const initializeSchema = mongoose.Schema({
    id:Number,
    title:String,
    price:Number,
    description:String,
    category:String,
    image:String,
    sold:Boolean,
    dateOfSale:String
});

const InitializeModel = mongoose.model("Initial",initializeSchema);

module.exports={
    InitializeModel
}
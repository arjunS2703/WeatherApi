import mongoose from 'mongoose';
const audSchema = new mongoose.Schema({
    cityname: String,
    temp: Number,
    feels_like: Number,
    min_temp: Number,
    max_temp: Number
    


});
module.exports = mongoose.model("temp",audSchema);
import mongoose from 'mongoose';
const audSchema = new mongoose.Schema({
    cityname: String,
    speed: Number,
    deg: Number,
    gust: Number,
    cloudsall: Number,
    dt: Number

});
module.exports = mongoose.model("wind",audSchema);
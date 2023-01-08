import mongoose from 'mongoose';
const audSchema = new mongoose.Schema({
    id: Number,
    cityname: String,
    country: String,
    sunrise: Number,
    sunset: Number,
    type: Number,
    timezone: Number

});
module.exports = mongoose.model("city",audSchema);
import  mongoose  from "mongoose";
import axios from "axios";
const dotenv =require('dotenv').config();
import express, {Request, RequestHandler, Response} from 'express';
const city = require("../model/city");
const temp= require("../model/temp");
const wind=require("../model/wind");
const weather = require("../model/weather");


export const apiData:RequestHandler= async (req: Request, res: Response)=>{
    const qCity=req.query.city;
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${qCity}&appid=${process.env.API_KEY}`)        
    const checkData = await city.findOne({cityname:qCity});
    console.log();
    if(!checkData){
    const dat=response.data;
            const weatherData=new weather({
                cityname: qCity,
                date: new Date(),
                main: dat.weather.main,
                desc: dat.description,
                lon: dat.coord.lon,
                lat: dat.coord.lat,
                icon: dat.weather.icon,
                base: dat.base,
                pressure: dat.main.pressure,
                humidity: dat.main.humidity,
                sea_level: dat.main.sea_level,
                grnd_level: dat.main.grnd_level,
                visibility: dat.visibility
            })
            const cityData=new city({
                id: dat.id,
                cityname: qCity,
                country: dat.sys.country,
                sunrise: dat.sys.sunrise,
                sunset: dat.sys.sunset,
                type: dat.sys.type,
                timezone: dat.timezone
            })
            
            const tempData=new temp({
                cityname: qCity,
                temp: dat.main.temp,
                feels_like: dat.main.feels_like,
                min_temp: dat.main.temp_min,
                max_temp: dat.main.temp_max,
            })
            const windData=new wind({
                cityname: qCity,
                speed: dat.wind.speed,
                deg: dat.wind.deg,
                gust: dat.wind.gust,
                cloudsall: dat.clouds.all,
                dt: dat.dt
            })
        res.send(dat);
        await weatherData.save();
        await cityData.save();
        await tempData.save();
        await windData.save();
    }
    else{
        const cityFound=await city.find({cityname:qCity});
        const weatherFound=await weather.find({cityname:qCity});
        const tempFound=await temp.find({cityname:qCity});
        const windFound=await wind.find({cityname:qCity});
        let dataFound={
            cityFound,
            weatherFound,
            tempFound,
            windFound
        }
        res.send(dataFound);
    }
};

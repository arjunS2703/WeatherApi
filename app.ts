import express, {Request, Response} from 'express';
const dotenv =require('dotenv').config();
import axios from 'axios';
const connectDB = require("./database/connectDB");
const weather = require("./model/weather");
import routes from './routes';
const app=express();
connectDB();

app.use('/api',routes);

app.listen(3000,()=>{
  console.log("listening on 3000");
});
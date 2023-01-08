import express, {Request, Response} from 'express';
const connectDB = require("./database/connectDB");
import routes from './routes';
const app=express();
connectDB();

app.use('/api',routes);

app.listen(3000,()=>{
  console.log("listening on 3000");
});
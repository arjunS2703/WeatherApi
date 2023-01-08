import {Request, Response, NextFunction} from "express";
class Middleware{
    async isPrime(req:Request, res: Response, next: NextFunction){
        console.log("---Middleware Authentication---");
        const currentDate:Date=new Date();
        const currentDay:number=currentDate.getDate();

        let primeNum:number[]=[0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1];
        if(primeNum[currentDay]===0){
            console.log("---Not Prime---");
            res.status(400).send("---No Data Found---");
            res.end();
            return;
        }
        console.log("---Prime---");
        next();
    }
}

export default new Middleware;
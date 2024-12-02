import { addform } from "../services/form";
import { Request, Response } from "express";
import { idfForm } from "../types/formInterface";


export const handleForm = async(req: Request<idfForm>,res:Response)=>{
   try{
    const savedForm = await addform(req.body);
    res.status(201).json(savedForm)
   }
   catch(err){
    res.status(400).json((err as Error).message)
   }
}
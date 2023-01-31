import mongoose from "mongoose";
import Pesan from "@/model/model"


export default async function addTest(req, res) {
    try {
    
      await  mongoose.connect("mongodb+srv://amirul:muminin@cluster0.8kmrj2i.mongodb.net/?retryWrites=true&w=majority", console.log("db okay"))
    
      const test = await Pesan.find();
        
      console.log("succes")
  
      res.json(test);
    } catch (error) {
      console.log(error);
      res.json( error );
    }
  }
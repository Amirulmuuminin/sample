import Pesan from "@/model/model"
import connectDb from "@/db/connect";


export default async function addTest(req, res) {
    try {
    
      await  connectDb
    
      const test = await Pesan.find();
        
      console.log("succes")
  
      res.json(test);
    } catch (error) {
      console.log(error);
      res.json( error );
    }
  }
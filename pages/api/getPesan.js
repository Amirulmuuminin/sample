import Pesan from "@/model/model"
import connectDb from "@/db/connect";


export default async function addTest(req, res) {
    try {
    
      await  connectDb
    
      const test = await Pesan.find().sort({_id: -1}) // sort({_id: -1}) terbaru tampil dulu
      console.log("succes")
  
      res.json(test);
    } catch (error) {
      console.log(error);
      res.json( error );
    }
  }
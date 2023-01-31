import Pesan from "model/model"
import connectDb from "@/db/connect";

export default async(req, res) => {
    // connect db
    console.log("connecting db")
    await connectDb
    console.log("db connected")

    //gunakan findOneAndUpdate
    console.log("updating")
    const updated = await Pesan.findOneAndUpdate({ _id: req.body._id },
      {pesan: req.body.pesan, nama: req.body.nama, email: req.body.email});
    console.log("updated")
    res.json(updated)
}
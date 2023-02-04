import connectDb from "@/db/connect";
import tugasModel from "@/models/tugasModel";

export default async(req, res) => {
    await connectDb
    console.log("db connected")

    if(req.method === "GET") {
        console.log("fetching documents")
        const data = await tugasModel.find({})
        console.log("success")

        res.json(data)
    }

    if(req.method === "POST") {
        console.log("writing documents")
        const data = await tugasModel.create(req.body)
        console.log("created")
        res.json(data)
    }
}
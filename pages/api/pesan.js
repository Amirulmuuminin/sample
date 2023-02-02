import connectDb from "@/db/connect";
import Pesan from "@/model/model"

export default async(req, res) => {
    // connecting db
    await connectDb
    console.log("db connected")

    //perhatikan penulisan ("GET")
    if(req.method === "GET") {
        try {
            // sort({_id: -1}) terbaru tampil dulu
	        const data = await Pesan.find().sort({_id: -1})
	        res.json(data)
        } catch (error) {
            res.json(error)
        }
    }

    if(req.method === "POST") {
        try {
	const data = await Pesan.create(req.body)
	        res.json(data)
        } catch (error) {
            res.json(error)
        }
    }

    if(req.method === "PATCH") {
        try {
            //gunakan findOneAndUpdate
            const data = await Pesan.findOneAndUpdate({_id: req.body._id},
            req.body)
	        res.json(data)
        } catch (error) {
            res.json(error)
        }
    }

    if(req.method === "DELETE") {
        try {
            // gunakan req.query untuk delete method, jangan req.body agar axios lebih mudah
            //req.query.id karena kita set id pada query (`/api/pesan/?id=${id}`)
            const data = await Pesan.deleteOne({_id: req.query.id})
	        res.json(data)
        } catch (error) {
            res.json(error)
        }
    }
}
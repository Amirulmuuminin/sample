import connectDb from "@/db/connect";
import Pesan from "@/model/model"

const deletePesan = async(req, res) => {
    
    console.log("connecting db")
    await connectDb
    console.log("db connected")

    console.log("deleting")
    // gunakan req.query untuk delete method, jangan req.body!!!
    const hapus = await Pesan.deleteOne({_id: req.query.id})
    console.log("item deleted")

    res.json(hapus)
}

export default deletePesan
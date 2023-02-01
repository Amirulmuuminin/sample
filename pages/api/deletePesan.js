import connectDb from "@/db/connect";
import Pesan from "@/model/model"

const deletePesan = async(req, res) => {
    
    console.log("connecting db")
    await connectDb
    console.log("db connected")

    console.log("deleting")
    await Pesan.deleteOne({_id: req.body._id})
    console.log("item deleted")

    res.json("item deleted")
}

export default deletePesan
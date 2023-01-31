import Pesan from "@/model/model"
import mongoose from "mongoose";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addTest(req, res) {
  try {
    await  mongoose.connect("mongodb+srv://amirul:muminin@cluster0.8kmrj2i.mongodb.net/?retryWrites=true&w=majority", console.log("db okay"))

    console.log('CREATING DOCUMENT');
    const test = await Pesan.create(req.body);
    console.log('CREATED DOCUMENT');

    res.json(test);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
}
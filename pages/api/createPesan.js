import Pesan from "@/model/model"
import connectDb from "@/db/connect";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addTest(req, res) {
  try {
    await connectDb

    console.log('CREATING DOCUMENT');
    const test = await Pesan.create(req.body);
    console.log('CREATED DOCUMENT');

    res.json(test);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
}
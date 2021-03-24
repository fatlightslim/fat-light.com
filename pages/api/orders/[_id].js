import { connectToDatabase } from "../../../utils/mongodb"
import { ObjectId } from "mongodb"

export default async function handler(req, res) {
  const auth = req.headers.authorization
  try {
    if (auth !== `Bearer ${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`) {
      throw Error("Bad request")
    }
    const { db } = await connectToDatabase()
    const _id = req.query._id
    db.collection("orders").findOne({ _id: ObjectId(_id) }, (err, r) => {
      if (err) console.log(err)

      res.json(r)
    })
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

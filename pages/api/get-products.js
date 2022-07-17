import axios from "axios";

export default async function handler(req, res) {
  const { data } = await axios.get(
    `${process.env.WooApiUrl}/products?consumer_key=${process.env.ConsumerKey}&consumer_secret=${process.env.ConsumerSecret}`,
    { data: { per_page: req.query.perPage ?? 10 } }
  );
  res.status(200).json({ data });
}

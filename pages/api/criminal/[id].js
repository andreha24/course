// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// http://localhost:3000/api/criminal/1
export default function handler(req, res) {
    console.log(req?.query?.id)
    res.status(200).json({ name: 'John Doe' })
  }
  
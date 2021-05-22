import { NextApiRequest, NextApiResponse } from 'next'
import { sendMail } from '@lib/utils/sendMail'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body

    await sendMail({ name, email, message })

    return res.status(200).end()
  }
  return res.status(404).json({
    error: {
      code: 'NOT_FOUND',
      message:
        "The requested endpoint was not found or doesn't support this method.",
    },
  })
}

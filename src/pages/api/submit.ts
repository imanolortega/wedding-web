import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { name, lastName, asistentQuantity, companionOne, companionTwo, specialFood } = req.body

    console.log('📨 Datos recibidos del cliente:', {
      name,
      lastName,
      asistentQuantity,
      companionOne,
      companionTwo,
      specialFood,
    })

    const googleScriptUrl = process.env.NEXT_PUBLIC_GOOGLE_DATABASE as string

    const response = await fetch(googleScriptUrl, {
      method: 'POST',
      body: JSON.stringify({
        name,
        lastName,
        asistentQuantity,
        companionOne,
        companionTwo,
        specialFood,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await response.json()
    res.status(200).json({ success: true, data })
  } catch (error) {
    console.error('Error sending to Google Sheets:', error)
    res.status(500).json({ error: 'Error sending data' })
  }
}

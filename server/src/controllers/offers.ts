import { analyzeOffer } from '@app/services/openai'
import { Request, Response } from 'express'
import infojobs from '@services/infojobs'
import querystring from 'querystring'

export const getOffers = async (req: Request, res: Response): Promise<void> => {

  const params = querystring.stringify(req.query as {})

  console.log({ params })
  const offers = await infojobs.getOffers(params)
  res.json(offers)
}

export const getOffer = async (req: Request, res: Response): Promise<void> => {
  const offer = await infojobs.getOffer(req.params.id)

  res.json(offer)
}

import { analyzeOffer } from '@app/services/openai'
import { Request, Response } from 'express'

export const getOffers = async (req: Request, res: Response): Promise<void> => {

  console.log('Hola buenos dias')

  res.send('data')
}

export const getOffer = async (req: Request, res: Response): Promise<void> => {
  res.send('Oferta ' + req.params.id)
}

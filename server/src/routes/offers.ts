import { getOffer, getOffers } from '@app/controllers/offers'
import { Router } from 'express'

const router = Router()

router.get('/offers', getOffers)
router.get('/offers/:id', getOffer)

export default router

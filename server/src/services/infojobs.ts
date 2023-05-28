import { INFOJOBS_CLIENT_ID, INFOJOBS_CLIENT_SECRET } from "@app/config/config"
import { OffersResponse } from "@app/types"
import axios from "axios"


const generateBase64 = (username: string, password: string) => {
  return Buffer.from(`${username}:${password}`).toString('base64')
}

const infojobsAPI = axios.create({
  baseURL: 'https://api.infojobs.net/api/',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Basic ${generateBase64(INFOJOBS_CLIENT_ID, INFOJOBS_CLIENT_SECRET)}`
  }
})


async function getOffers (params: string): Promise<OffersResponse> {
  const res = await infojobsAPI.get<OffersResponse>(`7/offer?${params}`)
  return res.data
}

async function getOffer (id: string) {
  const res = await infojobsAPI.get(`7/offer/${id}`)
  return res.data
}

export default {
  getOffer,
  getOffers,
}
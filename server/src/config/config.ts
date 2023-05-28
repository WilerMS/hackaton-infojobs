import dotenv from 'dotenv'


dotenv.config()

export const PORT = process.env.PORT ?? 7000
export const OPENAI_API_KEY = process.env.OPENAI_API_KEY
export const INFOJOBS_CLIENT_ID = process.env.INFOJOBS_CLIENT_ID as string
export const INFOJOBS_CLIENT_SECRET = process.env.INFOJOBS_CLIENT_SECRET as string

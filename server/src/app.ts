import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import offersRouter from '@app/routes/offers'

const app = express()

// middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.use('/api', offersRouter)

export default app

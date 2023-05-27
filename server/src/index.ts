import { PORT } from '@app/config/config'
import app from '@app/app'

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`)
})

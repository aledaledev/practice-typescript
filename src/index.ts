import express from 'express' //              ESModules
import diaryRouter from './routes/diaries'

const app = express()

//  middleware transforma req.body (lo que enviamos a la endpoint) a json
app.use(express.json())

const PORT = 3000

//  ignorando parametros : _
app.get('/ping', (_, res) => {
  res.send('pong')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})

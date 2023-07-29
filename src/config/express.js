import express from 'express'

const expressApp = express()

expressApp.use(express.json())

expressApp.get('/', (req, res) => {
  res.status(200).send(JSON.stringify({ succesmsg: 'EXPRESS GET' }))
})

export default expressApp

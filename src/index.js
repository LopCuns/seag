import '#Config/dotenv.config.js'
import myServer from '#Config/http.js'
import connectDB from '#Config/db.js'

const start = async (PORT, dburl) => {
  await connectDB(dburl)
  myServer.listen(PORT, () => {
    console.log(`Server listening in port ${process.env.PORT}`)
  })
}
start(process.env.PORT || 3300, process.env.DBURL)

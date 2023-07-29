import '#Config/dotenv.config.js'
import myServer from '#Config/http.js'
console.log(process.env.PORT)

myServer.listen(process.env.PORT, () => {
  console.log(`Server listening in port ${process.env.PORT}`)
})

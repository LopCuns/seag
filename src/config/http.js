import { createServer } from 'http'
import expressApp from './express.js'

const myServer = createServer(expressApp)

export default myServer

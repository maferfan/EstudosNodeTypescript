import express from 'express'
import path from 'path';
import info from './routes/info'
import notFound from './routes/NotFound'
import mustache from 'mustache-express'

const server = express();

server.set('view engine', 'mustache')
server.set('views', path.join(__dirname, 'views'))
server.engine('mustache', mustache())

console.log(path.join(__dirname, '../public')) // capta o endereço da pasta usando o 'path'

server.use(express.static('public')) // tornar a pasta estática. /css/style.css

server.use(info)
server.use(notFound)

server.listen(3000)
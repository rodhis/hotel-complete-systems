import express, { Request, Response, ErrorRequestHandler } from 'express'
import path from 'path'
import dotenv from 'dotenv'
import cors from 'cors'
import { MulterError } from 'multer'

import apiRoutes from './routes/routes'

dotenv.config()

const server = express()

server.use(cors())

server.use(express.static(path.join(__dirname, '../../public')))
server.use(express.urlencoded({ extended: true }))
server.use(express.json())

server.use('/api', apiRoutes)

server.use((req: Request, res: Response) => {
    res.status(404)
    res.json({ error: 'Endpoint não econtrado.' })
})

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    res.status(400)

    if (err instanceof MulterError) {
        res.json({ error: `Ocorreu um erro inesperado. (${err.code})` })
    }
}

server.use(errorHandler)

server.listen(process.env.PORT_SERVER)

import { Request, Response } from 'express'
import { Book } from '../models/Book'

export const getAll = async (req: Request, res: Response) => {
    try {
        const list = await Book.findAll()
        if (!list) {
            throw new Error('Erro ao localizar registro')
        }
        res.json({ list })
    } catch ({ message }) {
        res.status(404).json({ error: message })
    }
}

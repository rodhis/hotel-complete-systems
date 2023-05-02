import { Request, Response } from 'express'
import { Address } from '../models/Address'
import { Feedback } from '../models/Feedback'

export const getAll = async (req: Request, res: Response) => {
    try {
        const list = await Feedback.findAll({
            include: [
                {
                    model: Address,
                    as: 'endereco',
                },
            ],
        })
        if (list) {
            res.json({ list })
        }
    } catch ({ message }) {
        res.status(404).json({ message: message })
    }
}

export const getById = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const list = await Feedback.findOne({
            where: { id },
            include: [
                {
                    model: Address,
                    as: 'endereco',
                },
            ],
        })
        if (!list) {
            throw new Error('Usuário não encontrado')
        }
        return res.json({ list })
    } catch ({ message }) {
        res.status(404).json({ error: message })
    }
}

export const createFeedback = async (req: Request, res: Response) => {
    const { nome_usuario, email_usuario, password } = req.body
    try {
        if (nome_usuario === undefined && email_usuario === undefined && password === undefined) {
            throw new Error('Não foi possível cadastrar o usuário')
        }

        const newFeedback = Feedback.build({ nome_usuario, email_usuario, password })

        await newFeedback.save()

        return res.status(201).json({ message: 'Usuário cadastrado com sucesso' })
    } catch ({ message }) {
        return res.status(404).json({ error: message })
    }
}

export const editById = async (req: Request, res: Response) => {
    const { id } = req.params
    const { name, email, password, nivel, status } = req.body

    try {
        const list = await Feedback.findByPk(id)
        if (!list) {
            throw new Error('Usuário não encontrado')
        }

        // list.nome_usuario = name
        // list.email_usuario = email
        // list.password = password
        // list.nivel = nivel
        // list.status = status
        await list.save()

        return res.json({ message: list })
    } catch ({ message }) {
        return res.status(404).json({ error: message })
    }
}

export const deleteById = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const list = await Feedback.destroy({ where: { id } })
        if (!list) {
            throw new Error('Usuário não encontrado')
        }
        return res.json({ message: 'Usuário excluido com sucesso' })
    } catch ({ message }) {
        res.status(404).json({ error: message })
    }
}

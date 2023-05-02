import { Request, Response } from 'express'
import { Address } from '../models/Address'
import { User } from '../models/User'
import bcrypt from 'bcrypt'

export const getAll = async (req: Request, res: Response) => {
    try {
        const list = await User.findAll({
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
        const list = await User.findOne({
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

export const createUser = async (req: Request, res: Response) => {
    try {
        const hasData = req.body.nome_usuario && req.body.email_usuario && req.body.password

        if (hasData) {
            const { nome_usuario, email_usuario, password } = req.body
            const hasUser = await User.findOne({ where: { email_usuario } })

            if (!hasUser) {
                const hashedPassword = await bcrypt.hash(password, 10)
                const newUser = User.build({ nome_usuario, email_usuario, password: hashedPassword })

                await newUser.save()

                return res
                    .status(201)
                    .json({ message: 'Usuário cadastrado com sucesso', id: newUser.id, nome: newUser.nome_usuario, email: newUser.email_usuario })
            } else {
                res.status(400)
                throw new Error('E-mail já cadastrado na base de dados')
            }
        }
        res.status(400)
        throw new Error('Todos os campos são obrigatórios')
    } catch ({ message }) {
        return res.status(400).json({ error: message })
    }
}

export const editById = async (req: Request, res: Response) => {
    const { id } = req.params
    const { name, email, password, nivel, status } = req.body

    try {
        const list = await User.findByPk(id)
        if (!list) {
            throw new Error('Usuário não encontrado')
        }

        list.nome_usuario = name
        list.email_usuario = email
        list.password = password
        list.nivel = nivel
        list.status = status
        await list.save()

        return res.json({ message: list })
    } catch ({ message }) {
        return res.status(404).json({ error: message })
    }
}

export const deleteById = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const list = await User.destroy({ where: { id } })
        if (!list) {
            throw new Error('Usuário não encontrado')
        }
        return res.json({ message: 'Usuário excluido com sucesso' })
    } catch ({ message }) {
        res.status(404).json({ error: message })
    }
}

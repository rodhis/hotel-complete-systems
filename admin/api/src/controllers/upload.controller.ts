import { Response, Request } from 'express'
import sharp from 'sharp'
import { unlink } from 'fs/promises'
import path from 'path'

export const sendFile = async (req: Request, res: Response) => {
    if (req.file) {
        const filename = `${req.file.filename}`

        await sharp(req.file.path)
            .resize(300, 300)
            .toFormat('jpeg')
            .toFile(path.join(__dirname, `../../public/media/${filename}`))

        await unlink(req.file.path)
    }
    return res.json({ message: 'Upload realizado com sucesso' })
}

export const sendFiles = (req: Request, res: Response) => {}

// export const createUser = async (req: Request, res: Response) => {
//     const { nome_usuario, email_usuario, password } = req.body
//     try {
//         if (nome_usuario === '' && email_usuario === '' && password === '') {
//             res.status(400)
//             throw new Error('Não foi possível cadastrar o usuário')
//         }

//         const newUser = User.build({ nome_usuario, email_usuario, password })

//         await newUser.save()

//         return res
//             .status(201)
//             .json({ message: 'Usuário cadastrado com sucesso', id: newUser.id, nome: newUser.nome_usuario, email: newUser.email_usuario })
//     } catch ({ message }) {
//         return res.status(400).json({ error: message })
//     }
// }

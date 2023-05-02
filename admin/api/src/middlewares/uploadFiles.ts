import multer from 'multer'

const storageConfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './tmp')
    },
    filename: (req, { fieldname }, callback) => {
        const randomName = Math.floor(Math.random() * 999999)
        callback(null, `${fieldname}-${randomName}-${Date.now()}.jpg`)
    },
})

export const upload = multer({
    storage: storageConfig,
    fileFilter: (req, file, callback) => {
        const allowed: string[] = ['image/jpg', 'image/jpeg', 'image/png']
        callback(null, allowed.includes(file.mimetype))
    },
    limits: { fieldSize: 2097152 },
})

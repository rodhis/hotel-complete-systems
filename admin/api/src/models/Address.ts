import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../instances/mysql'
export interface AddressInstance extends Model {
    id: number
    cep: string
    logradouro: string
    numero: string
    complemento: string
    bairro: string
    cidade: string
    estado: string
    pais: string
    usuario_id: number
}

export const Address = sequelize.define<AddressInstance>(
    'Address',
    {
        id: { primaryKey: true, autoIncrement: true, type: DataTypes.INTEGER },
        cep: { type: DataTypes.STRING },
        logradouro: { type: DataTypes.STRING },
        numero: { type: DataTypes.NUMBER },
        complemento: { type: DataTypes.STRING },
        bairro: { type: DataTypes.STRING },
        cidade: { type: DataTypes.STRING },
        estado: { type: DataTypes.STRING },
        pais: { type: DataTypes.STRING },
        usuario_id: { type: DataTypes.NUMBER },
    },
    {
        tableName: 'endereco',
        timestamps: true,
    }
)

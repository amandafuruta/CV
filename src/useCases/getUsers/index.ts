import { IUser } from 'src/entities/User'
import { api } from 'src/services/api'

export async function getUsers(): Promise<IUser[]> {
    const { data } = await api.get('/users/')

    return data.users
}

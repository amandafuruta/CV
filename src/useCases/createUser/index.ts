import { User } from 'src/entities/User'
import { ICreateUserDTO } from './createUserDTO'

export async function createUser(data: ICreateUserDTO): Promise<User> {
    const user = new User({ name: data.name, email: data.email, cpf: data.cpf })

    return user
}

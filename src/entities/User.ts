export interface IUser {
    id: number
    name: string
    email: string
    cpf: string
    image?: string
}

export class User implements IUser {
    public readonly id: number

    public name: string

    public email: string

    public cpf: string

    public image?: string

    constructor(data: Omit<User, 'id'>, id?: number) {
        this.name = data.name
        this.email = data.email
        this.image = data.image
        this.cpf = data.cpf.replace(/\D/g, '')

        if (id) {
            this.id = id
        } else {
            this.id = -1
        }
    }

    public getFormattedCPF(): string {
        return this.cpf.replace(
            /(\d{3})(\d{3})(\d{3})(\d{2})/,
            (_, first, second, third, last) =>
                `${first}.${second}.${third}-${last}`,
        )
    }
}

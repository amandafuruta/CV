import { User } from '../entities/User'

import { ValidateResult } from '../interfaces/validate'

export function validateCpf(cpf: string): boolean {
    let amount = 0
    let rest: number

    if (cpf === '00000000000') return false

    for (let i = 1; i <= 9; i += 1)
        amount += Number(cpf.substring(i - 1, i)) * (11 - i)
    rest = (amount * 10) % 11

    if (rest === 10 || rest === 11) rest = 0
    if (rest !== Number(cpf.substring(9, 10))) return false

    amount = 0
    for (let i = 1; i <= 10; i += 1)
        amount += Number(cpf.substring(i - 1, i)) * (12 - i)
    rest = (amount * 10) % 11

    if (rest === 10 || rest === 11) rest = 0
    if (rest !== Number(cpf.substring(10, 11))) return false
    return true
}

export async function validateUser(user: User): Promise<ValidateResult> {
    const Yup = await import('yup')

    const validationErrors: Record<string, string> = {}

    const schema = Yup.object().shape({
        name: Yup.string().min(3, 'Digite no mínimo 3 caracteres.').required(),
        email: Yup.string().email('Digite um email válido.').required(),
        image: Yup.string().notRequired(),
    })

    try {
        await schema.validate(user, {
            abortEarly: false,
        })

        if (validateCpf(user.cpf)) {
            return { ok: true, fields: {} }
        }

        return { ok: false, fields: { cpf: 'Digite um CPF válido' } }
    } catch (err) {
        if (err instanceof Yup.ValidationError) {
            err.inner.forEach(error => {
                if (error && error.path) {
                    validationErrors[error.path] = error.message
                }
            })

            return { ok: false, fields: validationErrors }
        }

        return { ok: false, fields: {} }
    }
}

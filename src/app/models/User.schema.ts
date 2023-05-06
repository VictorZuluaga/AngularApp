export interface User {
    id?: string
    email: string
    password: string

    image?: string

    name?: string
    lastName?: string
    country?: string
    province?: string
    subscription?: boolean
}
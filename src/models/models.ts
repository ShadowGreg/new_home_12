export interface IUser{
    id: number
    name: string
    password: string
}
export interface IAuth {
    username: string
    password: string
}

export interface IRegistr {
    username: string
    password: string
    re_password: string
}

export interface IUserState {
    users: IUser[]
}
export interface IRegUser {
  userName: string,
  login: string,
  password: string
}

export interface IAuthUser {
  login: string,
  password: string
}

export interface IUser {
  id: string,
  userName: string,
  login: string,
  createdAt: string,
  password?: string,
  token: string
}

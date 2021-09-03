import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { User } from 'src/services/models'

const baseConfig: AxiosRequestConfig = {
  baseURL: 'https://jsonplaceholder.typicode.com/'
}

export class Users {
  private repository: AxiosInstance

  constructor(httpRepository: AxiosInstance = axios.create(baseConfig)) {
    this.repository = httpRepository
  }

  async getAll(): Promise<User[]> {
    const { data } = await this.repository.get<User[]>('users')

    return data
  }

  async getById(id: string): Promise<User> {
    const { data } = await this.repository.get<User>(`users/${id}`)

    return data
  }

  async create(user: User): Promise<User> {
    const { data } = await this.repository.post<User>('users', { ...user })

    return data
  }

  async update(id: string, newUserData: User): Promise<User> {
    const { data } = await this.repository.patch<User>(`users/${id}`, { ...newUserData })

    return data
  }

  async delete(id: string): Promise<Record<string, unknown>> {
    const { data } = await this.repository.patch<Record<string, unknown>>(`users/${id}`)

    return data
  }
}

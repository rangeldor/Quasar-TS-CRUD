import { Users } from 'src/services/Users'
import { User } from 'src/services/models'
import { ref } from 'vue'

const UserService = new Users()

const users = ref<User[]>([])

const getAllUsers = async () => {
  const tmpUsers = await UserService.getAll()

  users.value = [...tmpUsers]

  return tmpUsers
}

const getUserById = async(id: string) => UserService.getById(id)
const createUser = async(user: User) => UserService.create(user)
const updateUser = async(id: string, newUserData: User) => UserService.update(id, newUserData)
const deleteUser = async(id: string) => UserService.delete(id)

export default () => ({
  users,
  getAllUsers,
getUserById,
createUser,
updateUser,
deleteUser
})

import { UserRouteName } from 'src/enums/route'
import { useRouter } from 'vue-router'

export default () => {
  const $router = useRouter()

  const goToListUser = async () => {
    await $router.push({
      name: UserRouteName.List
    })
  }

  const goToViewUser = async (id: string) => {
    await $router.push({
      name: UserRouteName.View,
      params: { id }
    })
  }

  const goToCreateUser = async (id: string) => {
    await $router.push({
      name: UserRouteName.Create,
      params: { id }
    })
  }

  const goToUpdateUser = async (id: string) => {
    await $router.push({
      name: UserRouteName.Update,
      params: { id }
    })
  }

  const goToDeleteUser = async (id: string) => {
    await $router.push({
      name: UserRouteName.Delete,
      params: { id }
    })
  }

  return {
    goToListUser,
    goToViewUser,
    goToCreateUser,
    goToUpdateUser,
    goToDeleteUser
  }
}

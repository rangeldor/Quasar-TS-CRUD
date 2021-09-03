<template>
  <q-page padding>
    <!-- content -->
  </q-page>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import useUserService from 'src/hooks/useUserService'
import useUserRoute from 'src/hooks/useUserRoute'
import { Notify } from 'quasar'

export default defineComponent({
  name: 'UserRemove',

  setup() {
    const $route = useRoute()
    const userId: string = $route.params.id as string
    const { deleteUser } = useUserService()
    const { goToListUser } = useUserRoute()

    onBeforeMount(async () => {
      await deleteUser(userId)
      await goToListUser()
      Notify.create({
        message: `User #${userId} was removed successfully`,
        type: 'positive'
      })
    })
  }
})
</script>

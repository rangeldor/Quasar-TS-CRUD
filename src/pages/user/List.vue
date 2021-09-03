<template>
  <q-page padding>
    <UserListTable :rows="users"/>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent, onBeforeMount } from 'vue'
import useUserService from 'src/hooks/useUserService'

export default defineComponent({
  name: 'UserList',

  components: {
    UserListTable: defineAsyncComponent(() => import('components/UserListTable.vue'))
  },

  setup() {
    const {
      getAllUsers,
      users
    } = useUserService()

    onBeforeMount(async () => {
      await getAllUsers()
    })

    return {
      getAllUsers,
      users
    }
  }
})
</script>

<template>
  <q-page padding>
    <h1 class="text-h4 q-mt-none q-mb-md"> {{ getPageTitle }}</h1>
    <q-separator class="q-my-md" />
    <q-form>
      <div class="row q-col-gutter-md">
        <div class="col-xs-12 col-md-6 q-gutter-md">
          <p class="text-h6"> User Info </p>
          <q-input v-model="user.name" outlined label="Name *" hide-bottom-space lazy-rules :disable="routeIs.view" :rules="[val => val && val.length > 0 || 'Please type something']" />
          <q-input v-model="user.username" outlined label="Username *" hide-bottom-space lazy-rules :disable="routeIs.view" :rules="[val => val && val.length > 0 || 'Please type something']" />
          <q-input v-model="user.email" outlined label="E-mail *" hide-bottom-space lazy-rules :disable="routeIs.view" :rules="[val => val && val.length > 0 || 'Please type something']" />
          <q-input v-model="user.phone" outlined label="Phone" hide-bottom-space lazy-rules :disable="routeIs.view" />
          <q-input v-model="user.website" outlined label="Website" hide-bottom-space lazy-rules :disable="routeIs.view" />
        </div>
        <div class="col-xs-12 col-md-6 q-gutter-md">
          <p class="text-h6">
            Address
          </p>
          <q-input v-model="user.address.street" outlined label="Name *" hide-bottom-space lazy-rules :disable="routeIs.view" :rules="[val => val && val.length > 0 || 'Please type something']" />
          <q-input v-model="user.address.suite" outlined label="Username *" hide-bottom-space lazy-rules :disable="routeIs.view" :rules="[val => val && val.length > 0 || 'Please type something']" />
          <q-input v-model="user.address.zipcode" outlined label="E-mail *" hide-bottom-space lazy-rules :disable="routeIs.view" :rules="[val => val && val.length > 0 || 'Please type something']" />
        </div>
        <div class="col-xs-12">
          <div v-if="routeIs.create || routeIs.update">
            <q-btn :label="routeIs.create ? 'Create' : 'Update'" color="primary" @click="formSubmit()"/>
            <q-btn label="Reset" color="accent" flat class="q-ml-md" @click="resetState()" />
          </div>
        </div>
      </div>
    </q-form>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, onBeforeMount, computed } from 'vue'
import { User } from 'src/services/models'
import { useRoute } from 'vue-router'
import useUserService from 'src/hooks/useUserService'
import useUserRoute from 'src/hooks/useUserRoute'

const baseState = (): User => ({
  website: '',
  username: '',
  email: '',
  id: 1,
  name: '',
  phone: '',
  address: {
    street: '',
    suite: '',
    city: '',
    zipcode: '',
    geo: {
     lat: '',
     lng: ''
    }
  },
  company: {
    bs: '',
    catchPhrase: '',
    name: ''
  }

})

export default defineComponent({
  name: 'UserForm',

  setup() {
    const $route = useRoute()
    const userId: string = $route.params.id as string
    const { getUserById, createUser, updateUser } = useUserService()
    const { goToListUser } = useUserRoute()
    const user = ref<User>(baseState())
    const routeIs = computed(() => ({
      create: !!$route.meta.create,
      update: !!$route.meta.update,
      view: !!$route.meta.view
    }))

    const getPageTitle = computed(() => {
      if(routeIs.value.view) return user.value.name
      if(routeIs.value.update) return 'Update User'
      return 'Create User'
    })

    const getUserData = async () => {
      user.value = await getUserById(userId)
    }

    onBeforeMount(async () => {
      if(userId) await getUserData()
    })

    const resetState = async () => {
      if(routeIs.value.create) user.value = baseState()
      if(routeIs.value.update) await getUserData()
    }

    const formSubmit = async () => {
      if(routeIs.value.create) await createUser(user.value)
      if(routeIs.value.update) await updateUser(userId, user.value)
    }

    return {
      user,
      userId,
      routeIs,
      getPageTitle,
      goToListUser,
      resetState,
      formSubmit
    }
  }
})
</script>

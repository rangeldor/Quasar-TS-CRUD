<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          CRUD
        </q-item-label>

        <InternalLink
          v-for="link in internalLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import InternalLink from 'src/components/InternalLink.vue'
import { UserRouteName } from 'src/enums/route'

const internalLinks = [{
  title: 'User List',
  caption: 'Manage users',
  icon: 'supervised_user_circle',
  to: {
    name: UserRouteName.List
  }
}]

export default defineComponent({
  name: 'MainLayout',

  components: {
    InternalLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      internalLinks,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>

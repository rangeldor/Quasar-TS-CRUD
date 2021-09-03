<template>
  <q-table
    title="User List"
    :rows="rows"
    :columns="columnsData"
    row-key="name"
  >
  <template #top>
    <div class="q-table__control">
      <div class="q-table__title">
        User List
      </div>
    </div>
    <q-space />
    <q-btn color="primary" label="Create New User" @click="goToCreateUser" />
  </template>
  <template #body="props">
    <q-tr :props="props">
      <q-td key="name" :props="props">
        {{ props.row.name }}
      </q-td>
      <q-td key="username" :props="props">
        {{ props.row.username }}
      </q-td>
      <q-td key="email" :props="props">
        {{ props.row.email }}
      </q-td>
      <q-td class="text-right">
        <q-btn-group unelevated>
          <q-btn color="info" icon="visibility" @click="goToViewUser(props.row.id)"/>
          <q-btn color="positive" icon="create" @click="goToUpdateUser(props.row.id)"/>
          <q-btn color="negative" icon="delete" @click="goToDeleteUser(props.row.id)"/>
        </q-btn-group>
      </q-td>
    </q-tr>
  </template>
  </q-table>
</template>

<script lang="ts">
import { User } from 'src/services/models'
import { defineComponent, ref, PropType } from 'vue'
import useUserRoute from 'src/hooks/useUserRoute'

export default defineComponent({
  name: 'UserListTable',

  props: {
    rows: {
      required: true,
      type: Array as PropType<User[]>,
      default: () => ([])
    }
  },

  setup(props) {
    const {
      goToListUser,
      goToViewUser,
      goToCreateUser,
      goToUpdateUser,
      goToDeleteUser
    } = useUserRoute()
    const rows = ref<User[]>(props.rows ?? [])
    const columnsData = ref([
      {
        name: 'name',
        required: true,
        label: 'Name',
        field: 'name',
        align: 'left',
        sortable: true
      },
      {
        name: 'username',
        label: 'UserName',
        field: 'username',
        align: 'left',
        sortable: true
      },
      {
        name: 'email',
        label: 'E-mail',
        field: 'email',
        align: 'left',
        sortable: true
      },
      {
        name: '',
        label: '',
        field: '',
        align: 'right',
        sortable: true
      }
    ])

    return {
      rows,
      columnsData,
      goToListUser,
      goToViewUser,
      goToCreateUser,
      goToUpdateUser,
      goToDeleteUser
    }
  }
})
</script>

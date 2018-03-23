<template>
  <div>
  <h1>Nur mit Login</h1>

  <v-btn color="primary" @click.stop="logout">Logout</v-btn>
  </div>
</template>

<script>
import Authentication from '@/services/authentication'

export default {
  name: 'secured-component',
  methods: {
    logout () {
      Authentication.logout()
    }

  }
}
</script>

<style scoped>

</style>

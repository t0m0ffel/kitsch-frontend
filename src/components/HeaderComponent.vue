<template>
  <div>
    <v-navigation-drawer fixed
                         v-model="drawer"
                         app>
      <v-list dense>
        <v-list-tile @click="1" :to="'/'">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              Home
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="1" :to="'/secured'">
          <v-list-tile-action>
            <v-icon>lock</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Secure Page</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title :to="'/'">Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <login-component v-if="!loggedIn"/>
    </v-toolbar>
  </div>
</template>

<script>
import LoginComponent from '@/components/LoginComponent'
import Authentication from '@/services/authentication'

export default {
  components: {LoginComponent},
  name: 'header-component',
  data: () => ({
    drawer: false,
    loggedIn: Authentication.isLoggedIn()
  })
}
</script>

<style scoped>

</style>

<template>
  <div>
    <div id="app">
      <v-app id="inspire">
        <v-navigation-drawer fixed v-model="drawer" app>
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
          <router-view name="headerContent"/>
        </v-toolbar>
        <v-content>
          <v-container fluid>
            <router-view/>
          </v-container>
        </v-content>
        <v-footer color="indigo" app>
          <span class="white--text">&copy; 2017</span>
        </v-footer>
      </v-app>
    </div>
  </div>
</template>
<script>

export default {
  components: {},
  name: 'App',
  data: () => ({
    drawer: false
  })
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>

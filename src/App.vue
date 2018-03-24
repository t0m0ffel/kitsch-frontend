<template>
  <div>
    <div id="app">
      <v-app id="inspire">
        <router-view name="header"/>
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
import LayoutComponent from '@/components/LayoutComponent'

export default {
  components: {
    LayoutComponent
  },
  name: 'App'
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

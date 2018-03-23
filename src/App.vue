<template>
  <div>
    <div id="app">
      <v-app id="inspire">

      <v-footer color="indigo" app>
        <span class="white--text">&copy; 2017</span>
      </v-footer>
      </v-app>
    </div>
  </div>
</template>
<script>
import HeaderComponent from '@/components/HeaderComponent'

export default {
  components: {
    HeaderComponent
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

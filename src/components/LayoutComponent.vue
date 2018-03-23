<template>
  <div>
    <router-view name="header"/>
    <v-content>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-content>
  </div>
</template>

<script>
export default {
  name: 'layout-component'
}
</script>

<style scoped>

</style>

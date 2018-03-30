<template>
  <v-layout row align-center>
    <v-flex xs12 md3 offset-md1>
      <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Zutaten</h3>
          </div>
        </v-card-title>
        <v-list two-line>
          <template v-for="(item, index) in items">
            <v-divider v-if="item.divider" :inset="item.inset" :key="index"/>
            <v-list-tile avatar v-else :key="item.title" @click="1">
              <v-list-tile-content>
                <v-list-tile-title v-html="formatTitle(item.amount, item.unit, item.title)"/>
                <v-list-tile-sub-title v-html="item.subtitle"/>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
    </v-flex>

    <v-flex xs12 md6 offset-md1>
      <v-card class="pa-4">
        <template v-for="(para, index) in preparation" >
          <h2 v-bind:key="index" class="grey--text text--lighten-1">{{index +1 }}.</h2>
          <p v-bind:key="index">{{para}}</p>
        </template>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'recipe-component',

  data () {
    return {
      items: [
        {
          title: 'Eier',
          amount: '3',
          unit: ''
        },
        {divider: true, inset: true},
        {
          title: 'Reis',
          amount: '300',
          unit: 'g'
        },
        {divider: true, inset: true},
        {
          title: 'Mehl',
          amount: '31',
          unit: 'g'
        }
      ],
      preparation: ['Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.', 'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.']
    }
  },

  methods: {
    formatTitle (...items) {
      return items.filter(e => e
      ).join(' ')
    }
  }
}
</script>

<style scoped>

</style>

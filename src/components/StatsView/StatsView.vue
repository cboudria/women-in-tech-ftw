<template>
  <v-layout>
    <span v-if="error != ''">
      <pre>{{ error }}</pre>
    </span>
    <stats-chart :data="this.data"></stats-chart>
  </v-layout>
</template>

<script>
import * as firebase from 'firebase'
import StatsChart from '@/components/StatsView/StatsChart'
export default {
  data () {
    return {
      title: 'Stats',
      data: [],
      options: [],
      error: ''
    }
  },
  mounted () {
    this.getStatsData()
  },
  components: {
    StatsChart
  },
  methods: {
    getStatsData () {
      console.log('getting stats')
      firebase.database().ref('/stats').once('value').then(
        (snapshot) => {
          this.stats = snapshot.val
          console.log(snapshot.val())
        }).catch((error) => {
          this.error = error
        })
    }
  }
}
</script>

<style>

</style>
